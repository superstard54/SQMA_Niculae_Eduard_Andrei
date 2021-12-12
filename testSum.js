import  * as data  from "./index.js";

let testResults = [];

function testCases(cases) {
  cases.forEach((element) => {
    let result = data.default.getSum(element[0], element[1]);
    if (result !== element[2]) {
      testResults.push(
        `For values ${element[0]} and ${element[1]} the expected result is ${element[2]} but got ${result}`
      );
      return;
    }
    testResults.push("OK");
  });
}

let cases = [
  [1, 2, 3],
  [5, 4, 10],
  [2,2,4]
];
testCases(cases);
console.log(testResults);