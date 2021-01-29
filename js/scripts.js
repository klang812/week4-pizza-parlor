function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.order = function() {
  return this.size + " " + this.toppings;
}

Pizza.prototype.price = function() {
  baseSmall = 10;
  baseMedium = 12;
  baseLarge = 14;
  let pizzaPrice;
  this.size = 
  //let toppingQty;
    //for (let index = 1; index<=toppingQty; index++) {
  pizzaPrice = basePrice + (toppingQty * 4)
}
