// Problems in your to-do list
// difficulty rating: 580
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/TODOLIST

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const chunks = count => list => Array.from(
    { length: Math.ceil(list.length / count) },
    (_, i) => list.slice(i * count, (i + 1) * count)
);
const second = pair => pair[1];
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const filter = func => list => list.filter(func);
const gte = n => x => x >= n;
const count = list => list.length;
const print = s => console.log(s);

chunks(2)(tail(input))
    .map(second)
    .map(parseAsInts)
    .map(filter(gte(1000)))
    .map(count)
    .map(print);
