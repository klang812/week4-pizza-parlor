// Business Logic ------------
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

// Pizza.prototype.addTopping = function(topping) {
//   this.toppings.push(topping);
// }

Pizza.prototype.order = function(topping) {
  return this.size + " " + this.toppings.push(topping);
}

Pizza.prototype.totalPrice = function() {
  baseSmall = 10;
  baseMedium = 12;
  baseLarge = 14;
  numToppings;
  console.log("topping");
  for (index = 0; index<=numToppings; index++) {
    function numToppings()  {
      let inputElems = document.getElementsByTagName("input"),
        count = 0;
    
        for (let i=0; i<inputElems.length; i++) {       
        if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
              count++;
          }
          alert(count);
        }
      }
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

  // function checkboxes()  {
  // let inputElems = document.getElementsByTagName("input"),
  //   count = 0;

  //   for (let i=0; i<inputElems.length; i++) {       
  //   if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
  //         count++;
  //     }
  //     alert(count);
  //   }
  // }

// User Logic ---------------
  $(document).ready(function() {
    $("form#contactInfo").submit(function(event) {
      event.preventDefault();
      const customerName = $("input#customerName").val();
      
      $("form#orderInfo").hide();
      $("form#orderScreen").show();
      $("#name").text(customerName);
      //let newOrder = 
      //$("#ordertotal").text(???);
    });

  });