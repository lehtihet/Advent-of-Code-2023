

const fs = require("fs");
const path = require("path");

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().split("\n");


const digits = input.map(e => +(e.replace(/\D/g, "")[0] + (e.replace(/\D/g, "").slice(-1))));
const result = digits.reduce((previous, current) => previous+current, 0);
console.log(result);
