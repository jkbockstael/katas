// Count the Notebooks
// difficulty rating: 563
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/NOTEBOOK

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const print = s => console.log(s);

const notebooks = n => n * 10;

tail(input)
    .map(asInt)
    .map(notebooks)
    .map(print);
