// Good Program
// difficulty rating: 593
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/NIBBLE

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const project = map => x => map[`${x}`];
const print = s => console.log(s);

const wholeNibbles = n => n % 4 === 0;

tail(input)
    .map(parseAsInts)
    .map(wholeNibbles)
    .map(project({
        true: 'GOOD',
        false: 'NOT GOOD'
    }))
    .map(print);
