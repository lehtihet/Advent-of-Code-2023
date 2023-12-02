

const fs = require("fs");
const path = require("path");

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().split("\n");


const digits = input.map(e => {
    const parsedString = (
        e.replace(/one/g, 'o1e')
        .replace(/two/g, 't2o')
        .replace(/three/g, 'th3ee')
        .replace(/four/g, 'fo4r')
        .replace(/five/g, 'fi5e')
        .replace(/six/g, 's6x')
        .replace(/seven/g, 'sev7n')
        .replace(/eight/g, 'eig8t')
        .replace(/nine/g, 'n9ne')
        .replace(/\D/g, ""));
    return +(parsedString[0] + parsedString.slice(-1));
});

const result = digits.reduce((previous, current) => previous+current, 0);
console.log(result);
