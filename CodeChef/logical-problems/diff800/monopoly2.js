// Monopoly
// difficulty rating: 578
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/MONOPOLY2

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const sort = func => list => list.toSorted(func);
const desc = (a, b) => b - a;
const head = list => list[0];
const add = (a, b) => a + b;
const sum = list => list.reduce(add, 0);
const asYesNo = bool => bool ? 'YES' : 'NO';
const print = s => console.log(s);

const hasMonopoly = list => head(list) > sum(tail(list));

tail(input)
    .map(parseAsInts)
    .map(sort(desc))
    .map(hasMonopoly)
    .map(asYesNo)
    .map(print);
