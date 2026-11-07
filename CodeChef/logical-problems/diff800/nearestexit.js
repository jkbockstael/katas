// Nearest Exit
// difficulty rating: 585
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/NEARESTEXIT

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const project = map => x => map[`${x}`];
const print = s => console.log(s);

const nearestExit = seat => (100 - seat > seat - 1);

tail(input)
    .map(asInt)
    .map(nearestExit)
    .map(project({
        true: 'LEFT',
        false: 'RIGHT',
    }))
    .map(print);
