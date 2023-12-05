const fs = require("fs");
const path = require("path");

const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().replace(/\r/g, '').split("\n");

let mapping = [];
let transitions = [];

let source = input[0].replace('seeds: ', '').split(' ').map(e => +e);
let destination = [];
transitions.push(source);

function doMapping(startOfMapInfo) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].startsWith(startOfMapInfo)) {
            let j = 1;
            while(input[i+j] != '' && ((i+j) != input.length)) {
                mapping.push(input[i+j].split(' ').map(e => +e));
                j++;
            }
            i = i+j;
        }
    }
    source.forEach(s => {
        let mapped = false;
        for (let m = 0; m < mapping.length; m++) {
            if (s >= mapping[m][1] && s <= (mapping[m][1]+mapping[m][2])) {
                destination.push((mapping[m][0]+(s-mapping[m][1])));
                mapped = true;
                break;
            }
        }
        if (!mapped)
            destination.push(s);
    });
    
    source = destination;
    destination = [];
    mapping = [];
    transitions.push(source);
}

for (let map of ['seed-to-soil map:', 'soil-to-fertilizer map:', 'fertilizer-to-water map:', 'water-to-light map:', 'light-to-temperature map:', 'temperature-to-humidity map:', 'humidity-to-location map:'])
    doMapping(map);

console.log(Math.min(...transitions.slice(-1)[0]));
