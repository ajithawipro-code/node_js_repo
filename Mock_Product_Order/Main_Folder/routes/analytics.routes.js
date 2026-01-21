import express from "express";
import { readData } from "../models/db.model.js";

export const AnalyticsRoute=express.Router();

AnalyticsRoute.get("/allorders",(req,res)=>{

    const data=readData();
    const orders=data.orders;

    const totalcount=data.orders.length;

    res.status(200).json({message:"Total Count",totalcount,orders});


});

AnalyticsRoute.get("/cancelled-orders",(req,res)=>{

    const data=readData();

    const cancelled_orders= data.orders.filter((el)=>el.status==="cancelled");

    res.status(200).json({message:"Cancelled Orders", cancelled_orders});


});


AnalyticsRoute.get("/shipped",(req,res)=>{

    const data=readData();

    const shipped_orders= data.orders.filter((el)=>el.status==="shipped");

    const count=shipped_orders.length;

    res.status(200).json({message:"Shipped Orders Count", count,shipped_orders});


});

AnalyticsRoute.get("/total-revenue/:productId",(req,res)=>{

    const data=readData();

    const {productId}=req.params;

    const orders=data.orders.filter((el)=>el.id===Number(productId));

    const final_orders=orders.filter((el)=>el.status==="cancelled");

    


});