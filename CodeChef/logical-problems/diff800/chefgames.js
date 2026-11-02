// Chefland Games
// difficulty rating: 550
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/CHEFGAMES

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const every = p => list => list.every(p);
const project = map => x => map[`${x}`];
const print = s => console.log(s);

tail(input)
    .map(parseAsInts)
    .map(every(x => x === 0))
    .map(project({
        true: 'IN',
        false: 'OUT',
    }))
    .map(print);
