// Business Logic ------------
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
  
Pizza.prototype.orderTotal = function() {
  let totalPrice = 0;
  baseSmall = 10;
  baseMedium = 12;
  baseLarge = 14;
  if (this.size === "small") {
      totalPrice = (this.toppings.length * 2)  + baseSmall;
      } else if (this.size === "medium") {
      totalPrice = (this.toppings.length * 3)  + baseMedium;
      } else {
      totalPrice = (this.toppings.length * 4)  + baseLarge;
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
      let newToppings = [];
      document.querySelectorAll('input[name="toppings"]:checked').forEach((topping) => {
        newToppings.push(topping.value)
      })
      const pizza = new Pizza(getSize(pizzaSizes), newToppings);
      $("#orderInfo").hide();
      $("#orderScreen").show();
      const custOrder = pizza.orderTotal();
      $("#name").text(customerName);
      $("#orderTotal").text(custOrder); 
    });
  });