// Qualify the round
// difficulty rating: 594
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/QUALIFY

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
const project = map => x => map[`${x}`];
const print = s => console.log(s);

const evaluate = (a, b, c) => a <= b + 2 * c;
const asDecision = project({
    true: 'Qualify',
    false: 'NotQualify',
});

tail(input)
    .map(parseAsInts)
    .map(spread(evaluate))
    .map(asDecision)
    .map(print);
