// Chef in his Office
// difficulty rating: 532
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/OFFICE

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const spread = func => list => func(...list);
const print = s => console.log(s);

const hours = (x, y) => 4 * x + y;

tail(input)
    .map(parseAsInts)
    .map(spread(hours))
    .map(print);
