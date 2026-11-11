// Elections in Chefland
// difficulty rating: 604
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/ELECTN

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const chunks = count => list => Array.from(
    { length: Math.ceil(list.length / count) },
    (_, i) => list.slice(i * count, (i + 1) * count)
);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const map = func => list => list.map(func);
const second = pair => pair[1];
const filter = func => list => list.filter(func);
const gte = n => x => x >= n;
const spread = func => list => func(...list);
const count = list => list.length;
const print = s => console.log(s);

const eligibleVoters = (criteria, people) =>
    filter(gte(second(criteria)))(people);

chunks(2)(tail(input))
    .map(map(parseAsInts))
    .map(spread(eligibleVoters))
    .map(count)
    .map(print);
