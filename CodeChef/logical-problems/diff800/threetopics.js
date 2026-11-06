// The Three Topics
// difficulty rating: 573
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/THREETOPICS

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const take = count => list => list.slice(0, count);
const init = list => take(list.length - 1)(list);
const last = list => list[list.length - 1];
const asYesNo = bool => bool ? 'YES' : 'NO';
const print = s => console.log(s);

const possibleWin = list => init(list).includes(last(list));

input
    .map(parseAsInts)
    .map(possibleWin)
    .map(asYesNo)
    .map(print);
