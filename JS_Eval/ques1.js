 let startamount=0;

function deposit()
{
   

     return function getBalance(amount)
    {
       startamount = startamount+amount;
       console.log(startamount);
    }

}

function withdraw()
{


        return function getBalance(amount)
        {
           let withdrawal= startamount - amount;
           console.log(withdrawal);
        }


}

const bal = deposit();
bal(3000);
bal(2000);

const bal1= withdraw();
bal1(1000);
bal1(2000);


 

