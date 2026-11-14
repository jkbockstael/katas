// Bus Seat Numbering
// difficulty rating: 613
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/SEATNUMBER

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const print = s => console.log(s);

const numberToGrouping = number =>
    (number > 10)
    ? 'Single'
    : 'Double';

const numberToCategory = number => 
    (number < 16)
    ? 'Lower ' + numberToGrouping(number)
    : 'Upper ' + numberToGrouping(number - 15);
    
tail(input)
    .map(parseAsInts)
    .map(numberToCategory)
    .map(print);
