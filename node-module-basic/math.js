function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function power(a, b) {
    return a ** b;
}

module.exports = {
  add: add,
  substract: substract,
  multiply: multiply,
  divide : divide,
  power : power,
};

//add(3, 5)
