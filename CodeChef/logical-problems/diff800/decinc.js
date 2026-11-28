// Decrement OR Increment
// difficulty rating: 520
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/DECINC

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const asInt = s => parseInt(s);
const print = s => console.log(s);

const decrementOrIncrement = n =>
    (n % 4 === 0)
    ? n + 1
    : n - 1;

input
    .map(asInt)
    .map(decrementOrIncrement)
    .map(print);
