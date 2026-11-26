// Minimum number of coins
// difficulty rating: 711
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/MINCOINS

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const print = s => console.log(s);

const neededCoins = target =>
    (target % 5 !== 0)
    ? -1
    : (Math.floor((target / 10)) + (target % 10 / 5));

tail(input)
    .map(asInt)
    .map(neededCoins)
    .map(print);
