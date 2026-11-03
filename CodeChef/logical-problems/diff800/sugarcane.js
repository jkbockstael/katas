// Sugarcane Juice Business
// difficulty rating: 563
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/SUGARCANE

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const print = s => console.log(s);

const profit = n => Math.floor(0.3 * 50 * n);

tail(input)
    .map(asInt)
    .map(profit)
    .map(print);
