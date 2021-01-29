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
      console.log("small");
      } else if (this.size === "Medium") {
      totalPrice = (numToppings * 3)  + baseMedium;
      } else (this.size === "Large") {
      totalPrice = (numToppings * 4)  + baseLarge;
      }
    return "$" + totalPrice;
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

