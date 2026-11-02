// Water Filling
// difficulty rating: 541
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/WATERFILLING

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const add = (a, b) => a + b;
const sum = list => list.reduce(add, 0);
const lt = n => x => x < n;
const project = map => x => map[`${x}`];
const print = s => console.log(s);

tail(input)
    .map(parseAsInts)
    .map(sum)
    .map(lt(2))
    .map(project({
        true: 'Water filling time',
        false: 'Not now',
    }))
    .map(print);
