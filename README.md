# *Week 4 Pizza Parlor Project*

#### *Week 4 Pizza Parlor Project, 1.29.2021*

#### *By Kerry Lang*

## Description
_This project was intended to test my knowledge using loops, arrays, and testing code throughout the project. For example I implemented  multiple loops, tested code after completing each step of the objectives, made sure my code is clean and easy to read and made commits regularly to Github_

## Behavior

## Setup
* _Clone the repository https://github.com/klang812/week3-mrrogers/tree/main/mr-rogers-week3-project to your desktop._
* _Navigate to the top level of the directory._
* _Open programmer-language-selector/index.html in your browser._

## Specs

_Describe: Pizza()_
_Test: "This function constructs a pizza object with toppings, size and price."_
_Code: let pizza = new Pizza("pepperoni")_
_Expect(toppings).toEqual("pepperoni");_

_Describe: addTopping()_
_Test: "It will add toppings in an array for the order() function."_
_Code: Let pizza = new Pizza("small", "pepperoni", "sausage", "olives")_
_Expect("small", "pepperoni", "sausage", "olives").toEqual(["pepperoni", "sausage", "olives"]);_

_Describe: order()_
_Test: "it returns in a string the order for the user._
_Code: let pizza = let pizza = new Pizza("pepperoni", "Large");_
_Expect("pepperoni", "Large").toEqual("Large pepperoni);_

_Describe: totalPrice()_
_Test: "Prototype returns a price (10) for a small pizza."_
_Code: let pizza = new Pizza("Small")_ 
      _pizza.price = 10;_
_Expect("Small").toEqual(10);_

_Test: "Prototype returns a price (14) for a large pizza."_
_Code: let pizza = new Pizza("Large")_
      _pizza.price = 14;_
_Expect("Large").toEqual(14);_

_Test: "it will return a price based on number of toppings."_
_Code: let pizza = new Pizza("Small");_
      _let numToppings = 3;_
_Expect("Small" + 3).toEqual($22);_

_Test: "it will return a tiered price based on size and number of toppings."_
_Code:let pizza = new Pizza("Medium");_
      _let numToppings = 3;_
_Expect("Medium" + 3).toEqual($21);_

_Test: "it will return a tiered price based on size and number of toppings in a for loop."_
_Code:let pizza = new Pizza("Medium");_
      _let numToppings = 3;_
_Expect("Medium" + 3).toEqual($21);_


## Known Bugs
* _No known bugs at this time_

## Technologies Used
* _HTML_
* _CSS_
* _JQuery_
* _JavaScript_
* _Bootstrap_
* _MD_
* _Github_

## Legal
* Copyright (c) 2021 **_Kerry Lang_**
* This software is licensed under the MIT license.

