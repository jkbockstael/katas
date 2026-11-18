// Complementary Strand in a DNA
// difficulty rating: 660
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/DNASTRAND

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
const second = pair => pair[1];
const asList = s => s.split('');
const project = map => x => map[`${x}`];
const map = func => list => list.map(func);
const asString = list => list.join('');
const print = s => console.log(s);

const complementary = project({
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C',
});

chunks(2)(tail(input))
    .map(second)
    .map(asList)
    .map(map(complementary))
    .map(asString)
    .map(print);
