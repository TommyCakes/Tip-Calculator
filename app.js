var app = angular.module("myApp", [])
 .controller('calculator', function(){


  //  this.addTip = function (price, taxRate, tipPercentage ) {
  //    this.price = 2;
  //    this.taxRate = 3;
  //    this.tipPercentage = 4;
  //     this.subtotal = this.price + this.taxRate
   //
  //     alert(document.getElementById('test').value);
  //     console.log( this.subtotal)

  this.mealCount = 0;
  this.tipT = 0;
  this.avgTip = 0;


  this.addTip = function (price, tax, tip) {
    // this.price = document.getElementById('price').value;
    // this.tax = document.getElementById('tax').value;
    // this.tipP = 7;
// parseFloat
    tax = tax * 0.01;
    tip = tip * 0.01;
    console.log(tax, tip);
    this.subtotal = price * (1 + tax);
    this.tip = this.subtotal * tip;

    // tax & tip would be number * 0.01 would give %
    this.total = this.subtotal + this.tip;
    this.mealCount++;
    this.tipT += this.tip;
    this.avgTip = this.tipT/this.mealCount;
 };

 this.resetForm = function ( ) {

     this.price = "";
     this.tax = "";
     this.tipP = "";
     this.subtotal = "";
     this.tip = ""
     this.tipT = "";
     this.total = "";
     this.mealCount = 0;
     this.avgTip = "";

 };

 this.cancel = function () {

   this.price = "";
   this.tax = "";
   this.tipP = "";
 };

    //  console.log (50 *0.07);
    //  alert(this.subtotal);

 });
