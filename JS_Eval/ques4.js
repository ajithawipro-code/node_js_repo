function runSequential(tasks,delay)
{

    for(i=0;i<tasks.length;i++)
    {

        setTimeout(async()=>{
        try{

               const task = await tasks;
              
               if(!task)
               {
                 console.log("No task");
               }

               return task;


        }

        catch(error)
        {
            console.log(error);
        }   
      },1000);

    }}

    const res = runSequential(["run","walk"], 1000);

    console.log(res);