const fs = require("fs");
const path = require("path");

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().replace(/Card\s*?\d+: |\r/g, '').split("\n");
const winnings = [];
sum = 0;

input.forEach(line => {
    const parts = line.split('|').map(part => part.split(' ').filter(e => e !== '' && Number.isInteger(+e)));
    winnings.push([parts[1].filter(e => parts[0].includes(e)).length]);
});

for (let i = 0; i < winnings.length; i++) {
    for (let j = 1; j <= winnings[i][0]; j++) {
        for (let k = 0; k < winnings[i].length; k++) {
            winnings[i+j].push(winnings[i+j][0]);
            sum += 1;
        }
    }
}

console.log(sum+winnings.length);