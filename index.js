"use strict";

function Cashier(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;

  this.getCustomerMoney = function(value) {
    return (this.customerMoney = value);
  };

  this.countTotalPrice = function(order) {
    let totalPrices = [];

    for (let key in order) {
      totalPrices.push(order[key] * this.productDatabase[key]);
    }

    const reducer = (prev, next) => prev + next;

    return totalPrices.reduce(reducer);
  };

  this.countChange = function(totalPrice) {
    let change;

    if (totalPrice <= this.customerMoney) {
      change = this.customerMoney - totalPrice;
    } else {
      return null;
    }
    return change;
  };

  this.onSuccess = function(change) {
    return;
  };

  this.onError = function() {
    return;
  };

  this.reset = function() {
    this.customerMoney = 0;
    return;
  };
}

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40
};

const order = {
  bread: 2,
  milk: 3,
  apples: 10,
  cheese: 2
};

const mango = new Cashier("Mango", products);


console.log(mango.name);
console.log(mango.productDatabase);
console.log(mango.customerMoney);

const totalPrice = mango.countTotalPrice(order);
console.log(totalPrice);

mango.getCustomerMoney(800);
console.log(mango.customerMoney)

const change = mango.countChange(totalPrice);
console.log(change)

change !== null ? mango.onSuccess(change) : mango.onError();

mango.reset();
console.log(mango.customerMoney);
