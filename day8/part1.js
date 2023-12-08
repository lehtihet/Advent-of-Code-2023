const fs = require("fs");
const path = require("path");

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().replace(/\r/g, '').split("\n");

const instructions = input[0].split('').map(e => {
    if (e == 'L') return 0;
    return 1;
});

const map = new Map();

input.slice(2).forEach(l => {
    const a = l.replace(/=|\(|,|\)/g,'').split(' ');
    map.set(a[0], [a[2], a[3]]);
});

let counter = 0;
let current = 'AAA';
let goal = 'ZZZ';
let t = true;

while (t) {
    for (let i of instructions) {
        current = map.get(current)[i];
        counter++;
        if (current == goal) {
            t = false;
            break;
        }
    }
}

console.log(counter);