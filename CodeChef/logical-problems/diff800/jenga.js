// Jenga Night
// difficulty rating: 613
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/JENGA

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
const asYesNo = bool => bool ? 'YES' : 'NO';
const print = s => console.log(s);

const isPossible = entry => second(entry) % first(entry) === 0;

tail(input)
    .map(parseAsInts)
    .map(isPossible)
    .map(asYesNo)
    .map(print);
