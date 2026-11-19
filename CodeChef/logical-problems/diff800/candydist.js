// Candy Distribution
// difficulty rating: 668
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/CANDYDIST

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const spread = func => list => func(...list);
const asYesNo = bool => bool ? 'YES' : 'NO';
const print = s => console.log(s);

const canBeDistributed = (candies, friends) => (candies % (friends * 2) === 0);

tail(input)
    .map(parseAsInts)
    .map(spread(canBeDistributed))
    .map(asYesNo)
    .map(print);
