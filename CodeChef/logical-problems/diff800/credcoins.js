// CRED Coins
// difficulty rating: 539
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/CREDCOINS

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
const print = s => console.log(s);

const credcoins = (x, y) => Math.floor((x * y) / 100);

tail(input)
    .map(parseAsInts)
    .map(spread(credcoins))
    .map(print);
