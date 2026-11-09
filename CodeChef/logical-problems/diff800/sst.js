// Sasta Shark Tank
// difficulty rating: 592
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/SST

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const withPair = func => list => func(list[0], list[1]);
const compare = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0;
const project = map => x => map[`${x}`];
const print = s => console.log(s);

const valuation = (offerA, offerB) => ([offerA * 10, offerB * 5]);
const asPick = project({
    '-1': 'SECOND',
    '0' : 'ANY',
    '1' : 'FIRST',
});

tail(input)
    .map(parseAsInts)
    .map(withPair(valuation))
    .map(withPair(compare))
    .map(asPick)
    .map(print);
