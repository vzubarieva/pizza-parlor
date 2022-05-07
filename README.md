# _Pizza Parlor_

#### By _**Viktoriia Zubarieva**_
## Description


[GitHub pages]()
## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open index.html_ 

## Known Bugs

* No known bugs


## License

_MIT_

Copyright (c) _2022_ _Viktoriia Zubarieva_



Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza("medium", ["anchovies", "pineapple"]);
Expected Output: Pizza { size: "medium", toppings: ["anchovies", "pineapple"] }

Describe: getCost()

Test: "It should return cost of medium size pizza with cheese and pineapple toppings"
Code: const myPizza = new Pizza("medium", ["cheese", "pineapple"]);
      myPizza.getCost();
Expected Output: 11

Describe: changeSize()

Test: "It should change size of the pizza"
Code: const myPizza = new Pizza("medium", ["cheese", "pineapple"]);
      myPizza.changeSize("small")
      myPizza.size;
Expected Output: "small"

Describe: changeToppings()

Test: "It should change toppings for pizza"  
Code:const myPizza = new Pizza("medium", ["cheese", "pineapple"]);
      myPizza.changeToppings(["pepperoni"])
      myPizza.toppings;
Expected Output:["pepperoni"]