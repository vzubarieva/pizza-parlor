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


Pizza.prototype.changeSize = function () {

}