function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.order = function() {
  return this.size + " " + this.toppings;
}

Pizza.prototype.price = function() {
  baseSmall = 10;
  baseMedium = 12;
  baseLarge = 14;
  //let pizzaPrice;
  if (this.size === "Small") {
    return "$" + baseSmall;
  } else if (this.size === "Medium") {
    return "$" + baseMedium;
  } else (this.size === "Large"); {
    return "$" + baseLarge;
  }
}

  // this.size = 
  // //let toppingQty;
  //   //for (let index = 1; index<=toppingQty; index++) {
  // pizzaPrice = basePrice + (toppingQty * 4)

