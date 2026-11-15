// Discus Throw
// difficulty rating: 622
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/DISCUS

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
const head = list => list[0];
const max = list => head(sort(desc)(list))
const print = s => console.log(s);

tail(input)
    .map(parseAsInts)
    .map(max)
    .map(print);
