// Chef Eren
// difficulty rating: 706
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/CHEFEREN

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

const totalDuration = (episodeCount, evenDuration, oddDuration) => 
    Math.floor(episodeCount / 2) * evenDuration
    + Math.floor(episodeCount / 2) * oddDuration
    + ((episodeCount % 2 === 1) ? oddDuration : 0);

tail(input)
    .map(parseAsInts)
    .map(spread(totalDuration))
    .map(print);
