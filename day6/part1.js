const fs = require("fs");
const path = require("path");

const [time, dist] = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().replace(/\r/g, '').split("\n").map(e => e.split(' ').filter(e => e != '' && Number.isInteger(+e)));

let speed = 0;
let wonRaces = 0;
const waysToWin = [];

for (let i = 0; i < time.length; i++) {
    for (let t = 0; t < time[i]; t++) {
        if (speed*(time[i]-t) > dist[i])
            wonRaces++;
        speed++;
    }
    
    waysToWin.push(wonRaces);
    wonRaces = 0;
    speed = 0;
}

console.log(waysToWin.reduce((a,b) => a*b, 1));