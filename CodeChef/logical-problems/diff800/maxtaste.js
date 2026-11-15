// Maximise the Tastiness
// difficulty rating: 627
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/MAXTASTE

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const chunks = count => list => Array.from(
    { length: Math.ceil(list.length / count) },
    (_, i) => list.slice(i * count, (i + 1) * count)
);
const desc = (a, b) => b - a;
const sort = func => list => list.toSorted(func);
const head = list => list[0];
const max = list => head(sort(desc)(list))
const map = func => list => list.map(func);
const add = (a, b) => a + b;
const sum = list => list.reduce(add, 0);
const print = s => console.log(s);


tail(input)
    .map(parseAsInts)
    .map(chunks(2))
    .map(map(max))
    .map(sum)
    .map(print);
