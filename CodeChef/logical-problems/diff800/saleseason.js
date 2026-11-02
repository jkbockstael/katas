// Sale Season
// difficulty rating: 541
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/SALESEASON

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const print = s => console.log(s);

const applyDiscount = amount => amount - (
    (amount > 5000)
    ? 500
    : (amount > 1000)
        ? 100
        : (amount > 100)
            ? 25
            : 0);

tail(input)
    .map(asInt)
    .map(applyDiscount)
    .map(print);
