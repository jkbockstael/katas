// Chessboard Distance
// difficulty rating: 690
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/CHESSDIST

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

const chessdist = (x1, y1, x2, y2) =>
    Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));

tail(input)
    .map(parseAsInts)
    .map(spread(chessdist))
    .map(print);
