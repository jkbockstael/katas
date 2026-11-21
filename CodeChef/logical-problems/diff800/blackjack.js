// Blackjack
// difficulty rating: 681
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/BLACKJACK

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const add = (a, b) => a + b;
const sum = list => list.reduce(add, 0);
const print = s => console.log(s);

const requiredValue = n => 
    (n >= 11)
    ? 21 - n
    : -1;

tail(input)
    .map(parseAsInts)
    .map(sum)
    .map(requiredValue)
    .map(print);
