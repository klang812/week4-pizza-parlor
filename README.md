Describe: Pizza()
Test: "This function constructs a pizza object with toppings, size and price."
Code: let pizza = new Pizza("pepperoni")
Expect(toppings).toEqual("pepperoni");

Describe: addTopping()
Test: "It will add toppings in an array for the order() function."
Code: Let pizza = new Pizza("small", "pepperoni", "sausage", "olives")
Expect("small", "pepperoni", "sausage", "olives").toEqual(["pepperoni", "sausage", "olives"]);

Describe: order()
Test: "it returns in a string the order for the user
Code: let pizza = let pizza = new Pizza("pepperoni", "Large");
Expect("pepperoni", "Large").toEqual("Large pepperoni);

Describe: totalPrice()
Test: "Prototype returns a price (10) for a small pizza."
Code: let pizza = new Pizza("Small")
      pizza.price = 10;
Expect("Small").toEqual(10);

Test: "Prototype returns a price (14) for a large pizza."
Code: let pizza = new Pizza("Large")
      pizza.price = 14;
Expect("Large").toEqual(14);

Test: "it will return a price based on number of toppings."
Code: let pizza = new Pizza("Small");
      let numToppings = 3;
Expect("Small" + 3).toEqual($22);

Test: "it will return a tiered price based on size and number of toppings."
Code:let pizza = new Pizza("Medium");
      let numToppings = 3;
Expect("Medium" + 3).toEqual($21);

Test: "it will return a tiered price based on size and number of toppings in a for loop."
Code:let pizza = new Pizza("Medium");
      let numToppings = 3;
Expect("Medium" + 3).toEqual($21);

