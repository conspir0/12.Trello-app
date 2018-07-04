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