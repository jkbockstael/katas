// Chef and Water Bottles
// difficulty rating: 662
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/CHEFBOTTLE

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
const clampMax = n => x => (x <= n) ? x : n;
const print = s => console.log(s);

const countBottles = (bottles, capacity, available) => 
    clampMax(bottles)(Math.floor(available / capacity));

tail(input)
    .map(parseAsInts)
    .map(spread(countBottles))
    .map(print);
