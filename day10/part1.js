const fs = require("fs");
const path = require("path");

function addNext(s, i, j) {
    // Go right
    if (['S', '-', 'L', 'F'].includes(s) && ['-', 'J','7'].includes(input[i][j+1]) && !map.has([i,(j+1)].toString())) {
        map.set([i,(j+1)].toString(), (map.get([i,j].toString())+1) );
        frontier.push([i,(j+1)]);
    }
    // Go left
    if (['S', '-', 'J', '7'].includes(s) && ['-', 'L','F'].includes(input[i][j-1]) && !map.has([i,(j-1)].toString())) {
        map.set([i,(j-1)].toString(), (map.get([i,j].toString())+1));
        frontier.push([i,(j-1)]);
    }
    // Go down
    if (['S', '|', '7', 'F'].includes(s) && ['|', 'L','J'].includes(input[i+1][j]) && !map.has([(i+1),j].toString())) {
        map.set([(i+1),j].toString(), (map.get([i,j].toString())+1));
        frontier.push([(i+1),j]);
    }
    // Go up
    if (['S', '|', 'L', 'J'].includes(s) && ['|', '7','F'].includes(input[i-1][j]) && !map.has([(i-1),j].toString())) {
        map.set([(i-1),j].toString(), (map.get([i,j].toString())+1));
        frontier.push([(i-1),j]);
    }
}

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().replace(/\r/g, '').split("\n");
const row = input.length;
const col = input[0].length;

const map = new Map(); // Of visisted nodes, and their distance to S
const frontier = [];

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        if (input[i][j]=='S') {
            frontier.push([i,j]);
            map.set([i,j].toString(), 0);
        }
    }
}

let i = 0;
let j = 0;

for (let e of frontier) {
    i=e[0];
    j=e[1];
    addNext(input[i][j], i, j);
}

console.log(Math.max(...map.values()));