function main(numOne, numTwo) {
  // Only change code below this line
  var numOne;
  var numTwo;
  var product;
  product = numOne * numTwo;
  // Only change code above this line

  return product;
}

console.log(main(2.0, 2.5).toFixed(1));
console.log(main(5.5, 5.5));
console.log(main(100.25, 43.2));

module.exports = main;
