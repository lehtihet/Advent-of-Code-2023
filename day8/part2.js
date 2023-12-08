const fs = require("fs");
const path = require("path");

const { lcm } = require('mathjs');

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().replace(/\r/g, '').split("\n");

const instructions = input[0].split('').map(e => {
    if (e == 'L') return 0;
    return 1;
});

const map = new Map();
const startingNodes = [];
const goalReached = [];

input.slice(2).forEach(l => {
    const a = l.replace(/=|\(|,|\)/g,'').split(' ');
    map.set(a[0], [a[2], a[3]]);
    if (a[0][2] == 'A') {
        startingNodes.push(a[0]);
        goalReached.push(false);
    }
           
});

let counter = 0;
let t = true;
const index = [];

while (t) {
    for (let i of instructions) {
        counter++;

        for (let n = 0; n < startingNodes.length; n++) {
            if (goalReached[n]) continue;

            startingNodes[n] = map.get(startingNodes[n])[i];
            if (startingNodes[n][2] == 'Z') {
                goalReached[n] = true;
                index.push(counter);
            }
        } 
        
        if (goalReached.filter(g => !g).length == 0) {
            t = false;
            break;
        }
    }
}

console.log(lcm(...index));