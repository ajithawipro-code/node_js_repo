function runSequential(tasks,delay)
{

     return new Promise((resolve,reject)=>{

       setTimeout(()=>{
      
                            
               if(tasks)
               {
                 resolve(tasks);
               }

               else{
                reject("Tasks Not found")
               }   
      },1000);

    })

}


runSequential().then(tasks=>{
    console.log("tasks");
}).catch(error=>{
    console.log(error);
})
