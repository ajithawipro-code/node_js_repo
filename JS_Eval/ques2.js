function closureEx(n){

    let calls=0;

    for(let i=0;i<n;i++)
    {
        setTimeout(() => {
           console.log("printing--->",n)            
        }, 2000);

    }
    
}

closureEx(5);

