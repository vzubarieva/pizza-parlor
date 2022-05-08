// Business logic

function Pizza(size, toppings) {
  console.log(`[pizza] construct ${size} pizza with ${toppings}`);
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getCost = function () {
  console.log(`[pizza][getCost] getting cost of ${this.size} pizza with ${this.toppings}`);

  let result = 0;
  if (this.size === 'small') {
    console.log(`[pizza][getCost] ${this.size} size, adding 5`);
    result = result + 5;
  } else if (this.size === 'medium') {
    console.log(`[pizza][getCost] ${this.size} size, adding 8`);
    result = result + 8;
  } else if (this.size === 'large') {
    console.log(`[pizza][getCost] ${this.size} size, adding 10`);
    result = result + 10;
  };

  this.toppings.forEach(function (topping) {
    if (topping === 'cheese') {
      result = result + 2;
    } else if (topping === 'pepperoni') {
      result = result + 3;
    } else if (topping === 'pineapple') {
      result = result + 1;
    } else if (topping === 'meatballs') {
      result = result + 4;
    }
    console.log(`[pizza][getCost] with ${topping}, adding XXX to cost, total cost ${result}`);
  })
  return result;
}


Pizza.prototype.changeSize = function (size) {
  console.log(`[pizza][changeSize] changing pizza size from ${this.size} to ${size}`);
  this.size = size;
}

Pizza.prototype.changeToppings = function (toppings) {
  console.log(`[pizza][changeSize] changing pizza toppings from ${this.toppings} to ${toppings}`);
  this.toppings = toppings;
}

// UI logic

$(document).ready(function () {
  const myPizza = new Pizza('', []);
  $("#getCostButton").click(function () {
    const pizzaCost = myPizza.getCost();
    $("#cost").text(pizzaCost);
  });
  $("input[name=pizzaSize]").click(function (event) {
    myPizza.changeSize(event.target.value);
    $(".toppings-section").show();
  });
  $("input[name=pizzaToppings]").click(function (event) {
    const selectedToppings = $("input[name=pizzaToppings]:checked").map(function (index, element) {
      return element.value
    }).get();
    myPizza.changeToppings(selectedToppings);

  });

})
