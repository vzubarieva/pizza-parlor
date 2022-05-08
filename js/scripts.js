// Business logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getCost = function () {
  let result = 0;
  if (this.size === 'small') {
    result = result + 5;
  } else if (this.size === 'medium') {
    result = result + 8;
  } else if (this.size === 'large') {
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
  })
  return result;
}


Pizza.prototype.changeSize = function (size) {
  this.size = size;
}

Pizza.prototype.changeToppings = function (toppings) {
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
