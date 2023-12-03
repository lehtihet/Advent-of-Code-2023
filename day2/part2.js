const fs = require("fs");
const path = require("path");

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().split("\n");

const sum = input.map(e => {
    const games = e.replace(/Game \d+: /g, '').split(';');
    let red = 0, green = 0, blue = 0;
    games.forEach(game => {
        const redObs = game.match(/\d+ red/), blueObs = game.match(/\d+ blue/), greenObs = game.match(/\d+ green/);
        if (redObs) {red = Math.max(red, parseInt(redObs));}
        if (greenObs) {green = Math.max(green, parseInt(greenObs));}
        if (blueObs) {blue = Math.max(blue, parseInt(blueObs));}
    });
    return (red*green*blue);
}).reduce((a,b) => a+b);

console.log(sum);
