// Air Conditioner Temperature
// difficulty rating: 584
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/ACTEMP

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

const canAgree = (aliceTemp, bobTemp, charlieTemp) =>
    (bobTemp >= aliceTemp && bobTemp >= charlieTemp);

tail(input)
    .map(parseAsInts)
    .map(spread(canAgree))
    .map(asYesNo)
    .map(print);
