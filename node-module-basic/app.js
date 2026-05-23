// node app.js add 10 5 --> 15
// node app.js multiply 10 5 --> 50

const { add, substract, multiply, divide, power } = require("./math");

const operator = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (operator === "add") {
  console.log(add(num1, num2));
} else if (operator === "substract") {
  console.log(substract(num1, num2));
} else if (operator === "multiply") {
  console.log(multiply(num1, num2));
} else if (operator === "divide") {
  console.log(divide(num1, num2));
} else if (operator === "power") {
  console.log(power(num1, num2));
} else {
  console.log("지원하지 않는 연산입니다.");
}
 