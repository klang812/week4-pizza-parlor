function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.order = function() {
  return this.size + " " + this.toppings;
}

Pizza.prototype.totalPrice = function() {
  baseSmall = 10;
  baseMedium = 12;
  baseLarge = 14;
  perTopping = 4;
  toppings = perTopping * numToppings;
  if (this.size === "Small") {
    totalPrice = toppings + baseSmall;
    return "$" + totalPrice;
  } else if (this.size === "Medium") {
    return "$" + baseMedium;
  } else (this.size === "Large"); {
    return "$" + baseLarge;
  }
}

// Pizza.prototype.toppingPrice = function(baseSmall) {
//   perTopping = 4;
//   toppings = perTopping * numToppings;
//   if (this.size === "Small") {
//     totalPrice = toppings + baseSmall;
//     return totalPrice;
//   }
// }


  // this.size = 
  // //let toppingQty;
  //   //for (let index = 1; index<=toppingQty; index++) {
  // pizzaPrice = basePrice + (toppingQty * 4)

