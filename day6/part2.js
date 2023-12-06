const fs = require("fs");
const path = require("path");

const [time, dist] = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().split("\n").map(e => +(e.replace(/\s|\D/g, '')));
let wonRaces = 0;
for (let t = 0; t < time; t++)
    if (t*(time-t) > dist)
        wonRaces++;
console.log(wonRaces);