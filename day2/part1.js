const fs = require("fs");
const path = require("path");

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().split("\n");

const occuranceList = input.map(e => {
    const games = e.replace(/Game \d+: /g, '').split(';');
    let red = 0, green = 0, blue = 0;
    games.forEach(game => {
        const redObs = game.match(/\d+ red/), blueObs = game.match(/\d+ blue/), greenObs = game.match(/\d+ green/);
        if (redObs) {red = Math.max(red, parseInt(redObs));}
        if (greenObs) {green = Math.max(green, parseInt(greenObs));}
        if (blueObs) {blue = Math.max(blue, parseInt(blueObs));}
    });
    return [red, green, blue];
});

let sum = 0;

for (let i = 0; i < occuranceList.length; i++)
    if (occuranceList[i][0] <= 12 && occuranceList[i][1] <= 13 && occuranceList[i][2] <= 14)
        sum += i+1;

console.log(sum);