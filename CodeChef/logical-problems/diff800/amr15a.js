// Mahasena
// difficulty rating: 720
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/AMR15A

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const even = n => n % 2 === 0;
const odd = n => n % 2 === 1;
const project = map => x => map[`${x}`];
const print = s => console.log(s);

const readiness = luck => 
    (luck.filter(even).length) > (luck.filter(odd).length);

tail(input)
    .map(parseAsInts)
    .map(readiness)
    .map(project({
        true: 'READY FOR BATTLE',
        false: 'NOT READY',
    }))
    .map(print);
