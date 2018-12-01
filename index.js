"use strict";

function Cashier(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;

  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
  };

  this.countTotalPrice = function(order) {
  
     let totalPrice = 0;
    for (const key in order) {
      totalPrice += this.productDatabase[key] * order[key];
    }
    return totalPrice;
  };

  this.countChange = function(totalPrice) {
   return totalPrice <= this.customerMoney ? this.customerMoney - totalPrice : null;
  };

  this.onSuccess = function(change) {
    console.log(`Спасибо за покупку, ваша сдача ${change}!`);
  };

  this.onError = function() {
    console.log("Очень жаль, вам не хватает денег на покупки");
  };

  this.reset = function() {
    this.customerMoney = 0;
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
console.log(mango.customerMoney);

const change = mango.countChange(totalPrice);
console.log(change);

change !== null ? mango.onSuccess(change) : mango.onError();

mango.reset();
console.log(mango.customerMoney);
