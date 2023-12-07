const fs = require("fs");
const path = require("path");

function score(a) {
    const hand = a.split('');
    const map = new Map();

    hand.forEach(e => map.set(e, ((map.get(e) ?? 0) + 1)));
    const jokers = map.get('J') === undefined ? 0 : map.get('J');
    map.delete('J');

    const pairs = ([...map.values()].sort((a,b) => b - a));

    pairs[0] = isNaN(pairs[0]) ? jokers : pairs[0] + jokers;

    if (pairs[0] == 5) return 6;
    if (pairs[0] == 4) return 5;
    if (pairs[0] == 3 && pairs[1] == 2) return 4;
    if (pairs[0] == 3) return 3;
    if (pairs[0] == 2 && pairs[1] == 2) return 2;
    if (pairs[0] == 2) return 1;
    return 0;
}

function compare(a,b) {
    const final = score(a)-score(b);

    if (final != 0)
        return score(a)-score(b);

    const cardStrength = ['J', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'Q', 'K', 'A'];
    let strA = -1;
    let strB = -1;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == b[i]) continue;
        for (let s = 0; s < cardStrength.length; s++) {
            if (cardStrength[s] == a[i] && strA == -1)
                strA = s;
            if (cardStrength[s] == b[i] && strB == -1)
                strB = s;
        }
    }
    return strA-strB;
}

console.log(
    String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().replace(/\r/g, '').split("\n")
    .sort((a,b) => compare(a.split(' ')[0],b.split(' ')[0]))
    .map((h, i) => +(h.split(' ')[1])*(i+1))
    .reduce((a,b) => a+b)
    );
