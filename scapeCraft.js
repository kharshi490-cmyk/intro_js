const EMBER = "Ember";
const NEBULA = "Nebula";
const AURORA = "Aurora";
const RIFT = "Rift";
function firstRoute(gate) {
    if (gate === AURORA) return EMBER;
    if (gate === EMBER) return NEBULA;
    if (gate === NEBULA) return RIFT;
    if (gate === RIFT) return AURORA;
}

const OBSIDIAN = "Obsidian";
const ECLIPSE = "Eclipse";
function secondRoute(gate) {
    if (gate === EMBER) return NEBULA;
    if (gate === NEBULA) return RIFT;
    if (gate === RIFT) return OBSIDIAN;
    if (gate === OBSIDIAN) return ECLIPSE;
    if (gate === ECLIPSE) return EMBER;
}

function meet(ship1, ship2) {
    // if (ship1 === ship2) return 0;
    // return 1 + meet(firstRoute(ship1), secondRoute(ship2));
    return ship1 === ship2
        ? 0
        : meet(firstRoute(ship1), secondRoute(ship2)) + 1;
}

console.log(meet("Aurora", "Ember"));
console.log(meet("Ember", "Nebula"));
console.log(meet("Nebula", "Rift"));
console.log(meet("Rift", "Obsidian"));
console.log(meet("Aurora", "Eclipse"));
