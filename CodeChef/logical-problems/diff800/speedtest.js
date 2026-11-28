// Speed Limit Test
// difficulty rating: 718
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/SPEEDTEST

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const chunks = count => list => Array.from(
    { length: Math.ceil(list.length / count) },
    (_, i) => list.slice(i * count, (i + 1) * count)
);
const map = func => list => list.map(func);
const spread = func => list => func(...list);
const compare = (a,b) => (a < b) ? -1 : (a > b) ? 1 : 0;
const project = map => x => map[`${x}`];
const print = s => console.log(s);

const speed = (distance, time) => distance / time;
const toName = project({
    '-1': 'Bob',
    0: 'Equal',
    1: 'Alice',
});

tail(input)
    .map(parseAsInts)
    .map(chunks(2))
    .map(map(spread(speed)))
    .map(spread(compare))
    .map(toName)
    .map(print);
