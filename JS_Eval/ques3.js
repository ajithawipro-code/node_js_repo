function intervalSet(data){

    let count=0;

 setInterval(()=>{
    setTimeout((data) => {

           count ++;
           console.log(count);
        
    }, data);

 })
}

intervalSet(4000);