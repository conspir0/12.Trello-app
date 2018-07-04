'use strict';

function Phone(brand, model, color, price) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
}

Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ', model: ' + this.model + ', color: ' + this.color + ' and the price is: ' +this.price + '.');
}

var iPhone = new Phone("Apple", "8, 5,5'", "red", 4000);
var Samsung = new Phone("Samsung", "S8+", "black", 2100);
var Sony = new Phone("Sony", "Xpaeria XZ2", "green", 3600);
var Huawei = new Phone("Huawei", "P20", "black", 3500);

iPhone.printInfo();
Samsung.printInfo();
Sony.printInfo();
Huawei.printInfo();