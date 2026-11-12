// Minimum Cars Required
// difficulty rating: 608
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/MINCARS

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const print = s => console.log(s);

const minCars = n => Math.ceil(n / 4);

tail(input)
    .map(parseAsInts)
    .map(minCars)
    .map(print);
