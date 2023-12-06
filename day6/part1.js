const fs = require("fs");
const path = require("path");

const [time, dist] = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().replace(/\r/g, '').split("\n").map(e => e.split(' ').filter(e => e != '' && Number.isInteger(+e)));

let wonRaces = 0;
const waysToWin = [];

for (let i = 0; i < time.length; i++) {
    for (let t = 0; t < time[i]; t++) // t is both speed and time counter
        if (t*(time[i]-t) > dist[i])
            wonRaces++;
    waysToWin.push(wonRaces);
    wonRaces = 0;
}

console.log(waysToWin.reduce((a,b) => a*b, 1));