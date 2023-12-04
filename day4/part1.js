const fs = require("fs");
const path = require("path");

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().replace(/Card\s*?\d+: |\r/g, '').split("\n");
const winnings = [];
sum = 0;

input.forEach(line => {
    const parts = line.split('|').map(part => part.split(' ').filter(e => e !== '' && Number.isInteger(+e)));
    winnings.push(parts[1].filter(e => parts[0].includes(e)));
});

winnings.forEach(win => {
    if (win.length >= 1)
        sum += 2**(win.length-1);
});
console.log(sum);