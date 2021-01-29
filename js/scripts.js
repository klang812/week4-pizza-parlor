// Business Logic ------------
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
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
    if (this.size === "small") {
      totalPrice = (numToppings * 2)  + baseSmall
      } else if (this.size === "medium") {
      totalPrice = (numToppings * 3)  + baseMedium;
      } else {
      totalPrice = (numToppings * 4)  + baseLarge;
      }
    return "$" + totalPrice;
    }
  }

