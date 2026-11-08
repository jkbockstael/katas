// Reverse the Number
// difficulty rating: 420
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/FLOW007

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asList = s => s.split('');
const asString = list => list.join('');
const asInt = (x) => parseInt(x);
const print = s => console.log(s);

const reverse = list => list.toReversed();

tail(input)
    .map(asList)
    .map(reverse)
    .map(asString)
    .map(asInt)
    .map(print)
