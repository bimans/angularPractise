//class
class Custome{
//properties
CustomerId:number;
CustomerName:string;
CustomerBal:number;
data:string;

//constructor
constructor(CustomerId:number,CustomerName:string,CustomerBal:number,){
this.CustomerId=CustomerId;
this.CustomerName=CustomerName;
this.CustomerBal=CustomerBal;

}

//method
 display(){
// this.data="customer id is"+this.CustomerId+"\ncustomer name is:"+this.CustomerName+
//             "\ncustomer bill is:"+this.CustomerBal;

this.data=`customer id:${this.CustomerId},
            customer name:${this.CustomerName},
            customer bill:${this.CustomerBal}`;


            
            console.log(this.data);
}

Deposite(amount:number){
   return  this.CustomerBal +amount;
}


}

var obj:Custome=new Custome(101,'anuradha',25000);
obj.display();
console.log(obj.Deposite(10000));