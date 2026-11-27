// Too many Floors
// difficulty rating: 717
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/FLOORS

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const map = func => list => list.map(func);
const sub = (a, b) => a - b;
const diff = list => list.reduce(sub);
const abs = n => Math.abs(n);
const print = s => console.log(s);

const toFloor = roomNumber => Math.ceil(roomNumber / 10);

tail(input)
    .map(parseAsInts)
    .map(map(toFloor))
    .map(diff)
    .map(abs)
    .map(print);
