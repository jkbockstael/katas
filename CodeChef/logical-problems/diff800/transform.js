// Mario and Transformation
// difficulty rating: 649
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/TRANSFORM

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const project = map => x => map[`${x}`];
const print = s => console.log(s);

const eat = n => n % 3;
const toSize = project({
    0: 'NORMAL',
    1: 'HUGE',
    2: 'SMALL',
});

tail(input)
    .map(parseAsInts)
    .map(eat)
    .map(toSize)
    .map(print);
