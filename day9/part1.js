const fs = require("fs");
const path = require("path");

function genSeq(a) {
    const seq = [];
    for (let i = 0; i < a.length-1; i++) {
        seq.push(a[i+1]-a[i]);
    }
    return seq;
}

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().replace(/\r/g, '').split("\n").map(e  => e.split(' ').map(a=>+a));

let current = [];
const history = [];

for (let i = 0; i < input.length; i++) {
    current = input[i];
    history[i] = [];
    while (current.filter(e => e!=0).length != 0) {
        history[i].push(current);
        current = genSeq(current);
    }
}

let len = 0;
for (let v of history) {
    len = v[v.length-1].length-1;
    v[v.length-1].push(v[v.length-1][len]);
    len++;
    for (let i = v.length-2; i >= 0; i--) {
        v[i].push(v[i][len]+v[i+1][len]);
        len++;
    }
}

console.log(history.map(e => e[0][e[0].length-1]).reduce((a,b)=>a+b));