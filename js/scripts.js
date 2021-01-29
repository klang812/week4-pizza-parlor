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
  }
  // this.size = 
  // //let toppingQty;
  //   //for (let index = 1; index<=toppingQty; index++) {
  // pizzaPrice = basePrice + (toppingQty * 4)
}
