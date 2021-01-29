// Business Logic ------------
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
  numToppings;
  for (index = 0; index<=numToppings; index++) {
    if (this.size === "Small") {
      totalPrice = (numToppings * 2)  + baseSmall
      } else if (this.size === "Medium") {
      totalPrice = (numToppings * 3)  + baseMedium;
      } else {
      totalPrice = (numToppings * 4)  + baseLarge;
      }
    return "$" + totalPrice;
    }
  }

