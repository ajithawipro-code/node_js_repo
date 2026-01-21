import express from "express";

import { readData, writeData } from "../models/db.model.js";

export const OrderRoute=express.Router();

OrderRoute.post("/orders",(req,res)=>{

    const data=readData();

    console.log("I ma here");

    const {productId,quantity} = req.body;

    const product=data.products.find((el)=>el.id===Number(productId));

  
    if(!product)
    {
        return res.status(404).json("Product Not Found");
    }
       if(product.stock<quantity)
    {
        return res.status(400).json("Insufficient stock");
    }
        const totalAmount= product.price* quantity;
        const createdAt=new Date().toISOString().slice(0,10);
    let newId=1;

        if(data.orders.length>0)
        {
            const lastOrder=data.orders[data.orders.length-1];
            newId=lastOrder.id+1;
        }


        const newOrder= {
            id:newId,
            productId,
            quantity,
            totalAmount,
            status:"placed",
            createdAt: createdAt

        }

        data.orders.push(newOrder);

        product.stock=product.stock-quantity;

        writeData(data);
        console.log(data);
        res.status(201).json({message: "New order placed", newOrder});

});

OrderRoute.get("/orders",(req,res)=>{

    const data=readData();

    const orders=data.orders;
    res.status(200).json({message:"All orders",orders});

});

OrderRoute.delete("/orders/:orderId",(req,res)=>{

    const data=readData();
    const {orderId} = req.params;

    const order=data.orders.find((el)=>el.id===Number(orderId));
   // console.log(order);

    
    if(!order)
    {
        return res.status(404).json("Order not found");

    }

    if(order.status==="cancelled")
    {
        return res.status(400).json("Order already cancelled");
    }
     const today=new Date().toISOString().slice(0,10);
     console.log(today);

     console.log(orderId)
    if(order.createdAt===today)
    {
           order.status="cancelled";
           const product=data.products.find(el=>el.id===Number(orderId));

           console.log(product.stock);
           product.stock=product.stock+order.quantity;
    }

    writeData(data);
    res.status(200).json("Order Cancelled");
    

});

OrderRoute.patch("/orders/:orderId",(req,res)=>{

    const data=readData();
    const {orderId} = req.params;

    const order=data.orders.find((el)=>el.id===Number(orderId));

    if(order.status==="placed")
    {
        order.status="shipped";
        writeData(data);
        return res.status(200).json("Status updated to shipped");
    }

    else if(order.status==="shipped")
    {
        order.status="delivered";
        writeData(data);
        return res.status(200).json("Status updated to delivered");
    }
    else
    {
        return res.status(400).json("Invalid order");
    }

        
});