// It is My Serve
// difficulty rating: 691
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/MYSERVE

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
const project = map => x => map[`${x}`];
const print = s => console.log(s);

const serveTurn = points => (Math.floor(points / 2) % 2);
const asPlayerName = project({
    0: 'Alice',
    1: 'Bob',
});

tail(input)
    .map(parseAsInts)
    .map(sum)
    .map(serveTurn)
    .map(asPlayerName)
    .map(print);