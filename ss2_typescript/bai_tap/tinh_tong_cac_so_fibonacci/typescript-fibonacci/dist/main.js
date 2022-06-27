"use strict";
let fib = function (n) {
    if (n == 1) {
        return [0, 1];
    }
    else {
        let arr = fib(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
};
let sum = 0;
for (let i = 0; i < fib(5).length; i++) {
    sum = sum + fib(5)[i];
}
console.log(sum);
