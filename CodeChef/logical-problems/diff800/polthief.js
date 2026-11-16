// Police and Thief
// difficulty rating: 639
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/POLTHIEF

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const desc = (a, b) => b - a;
const sort = func => list => list.toSorted(func);
const sub = (a, b) => a - b;
const diff = list => list.reduce(sub);
const print = s => console.log(s);

tail(input)
    .map(parseAsInts)
    .map(sort(desc))
    .map(diff)
    .map(print);
