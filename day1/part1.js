

const fs = require("fs");
const path = require("path");

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().split("\n");

const digits = input.map(e => {
    const parsedString = e.replace(/\D/g, "");
    return +(parsedString[0] + parsedString.slice(-1));
});

const result = digits.reduce((previous, current) => previous+current, 0);
console.log(result);
