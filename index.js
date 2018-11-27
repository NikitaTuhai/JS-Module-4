"use strict";

function Cashier(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;

  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
    return console.log(`Ваши :${value}`);
  };

  this.countTotalPrice = function(order) {
    let sum = 0;

    for (let key in order) {
      for (let item in this.productDatabase) {
        if (item === key) {
          sum += this.productDatabase[item] * order[key];
        }
      }
    }
    return sum;
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
    return console.log(`Спасибо за покупку,ваша сдача: ${change}`);
  };

  this.onError = function() {
    return console.log("Очень жаль, вам не хватает денег на покупки");
  };

  this.reset = function() {
    this.customerMoney = 0;
    return this.customerMoney;
  };
}

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40
};

const mango = new Cashier("Mango", products);

const order = {
  bread: 2,
  milk: 3,
  apples: 10,
  cheese: 2
};

const totalPrice = mango.countTotalPrice(order);
console.log(`Сумма покупки : ${totalPrice}`);

mango.getCustomerMoney(800);

const change = mango.countChange(totalPrice);

if (change !== null) {
  mango.onSuccess(change);
} else {
  mango.onError();
}

mango.reset();

console.log(mango.customerMoney);
