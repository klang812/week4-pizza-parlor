// Business Logic ------------
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.custChoice = function() {
  let numToppings = document.getElementsByName("toppings");
  let count = 0;
  for (index = 0; index<numToppings.length; index++) {
    if (numToppings[index].checked === true) {
      count++;
    }
  }
  return count;
}
  
Pizza.prototype.orderTotal = function() {
  let totalPrice = 0;
  baseSmall = 10;
  baseMedium = 12;
  baseLarge = 14;
  if (this.size === "small") {
      totalPrice = (this.custChoice() * 2)  + baseSmall;
      } else if (this.size === "medium") {
      totalPrice = (this.custChoice() * 3)  + baseMedium;
      } else {
      totalPrice = (this.custChoice() * 4)  + baseLarge;
  }
  return "$" + totalPrice;
}

function getSize(pizzaSizes) {
  for (let i=0; i<pizzaSizes.length; i++) {
    if (pizzaSizes[i].checked === true) {
      return pizzaSizes[i].value;
    }
  }
}

// User Logic ---------------
  $(document).ready(function() {
    $("form#orderInfo").submit(function(event) {
      event.preventDefault();
      const customerName = $("input#customerName").val();
      const pizzaSizes = document.getElementsByName("size");
      const pizza = new Pizza(getSize(pizzaSizes));
      $("#orderInfo").hide();
      $("#orderScreen").show();
      const custOrder = pizza.orderTotal();
      $("#name").text(customerName);
      $("#orderTotal").text(custOrder); 
    });
  });