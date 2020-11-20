//class
var Customer = /** @class */ (function () {
    //constructor
    function Customer(CustomerId, CustomerName, CustomerBal) {
        this.CustomerId = CustomerId;
        this.CustomerName = CustomerName;
        this.CustomerBal = CustomerBal;
    }
    //method
    Customer.prototype.display = function () {
        this.data = "customer id is" + this.CustomerId + "/ncustomer name is:" + this.CustomerName +
            "/ncustomer bill is:" + this.CustomerBal;
    };
    return Customer;
}());
var obj = new Customer(101, 'anuradha', 25000);
obj.display();
