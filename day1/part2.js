

const fs = require("fs");
const path = require("path");

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().split("\n");


const digits = input.map(e => {
    const parsedString = (e.replace('one', '1').replace('two', '2').replace('three', '3').replace('four', '4').replace('five', '5').replace('six', '6').replace('seven', '7').replace('eight', '8').replace('nine', '9').replace(/\D/g, ""));
    return +(parsedString[0] + parsedString.slice(-1));
});

const result = digits.reduce((previous, current) => previous+current, 0);
console.log(result);
