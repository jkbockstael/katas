// Flip the cards
// difficulty rating: 641
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/FLIPCARDS

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const first = pair => pair[0];
const second = pair => pair[1];
const head = list => list[0];
const asc = (a, b) => a - b;
const sort = func => list => list.toSorted(func);
const min = list => head(sort(asc)(list))
const print = s => console.log(s);

const combine = pair =>
    ([first(pair) - second(pair), second(pair)]);

tail(input)
    .map(parseAsInts)
    .map(combine)
    .map(min)
    .map(print);
