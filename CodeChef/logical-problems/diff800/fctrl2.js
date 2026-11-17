// Small factorials
// difficulty rating: 420
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/FCTRL2

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asBigInt = s => BigInt(s);
const toString = n => n.toString();
const print = s => console.log(s);

const factorial = n =>
    (n <= 2)
    ? n
    : n * factorial(n - BigInt(1));

tail(input)
    .map(asBigInt)
    .map(factorial)
    .map(toString)
    .map(print);
