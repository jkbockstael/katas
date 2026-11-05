// Is the Score Consistent
// difficulty rating: 572
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/TRUESCORE

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const chunks = count => list => Array.from(
    { length: Math.ceil(list.length / count) },
    (_, i) => list.slice(i * count, (i + 1) * count)
);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const map = func => list => list.map(func);
const spread = func => list => func(...list);
const first = pair => pair[0];
const second = pair => pair[1];
const project = map => x => map[`${x}`];
const print = s => console.log(s);

const isPossible = (earlierScore, laterScore) => 
    (first(laterScore) >= first(earlierScore))
    && (second(laterScore) >= second(earlierScore));

chunks(2)(tail(input))
    .map(map(parseAsInts))
    .map(spread(isPossible))
    .map(project({
        true: 'POSSIBLE',
        false: 'IMPOSSIBLE',
    }))
    .map(print);
