const fs = require("fs");
const path = require("path");

const [time, dist] = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().split("\n").map(e => +(e.replace(/\s|\D/g, '')));
let speed = 0;
let wonRaces = 0;

for (let t = 0; t < time; t++) {
    if (speed*(time-t) > dist)
        wonRaces++;
    speed++;
}

console.log(wonRaces);