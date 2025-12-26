
const wizard = {
    name: "Gandalf",
    health: 100
};

const archer = {
    name: "Legolas",
    health: 80
};

function attack(weapon, damage) {
    console.log(`${this.name} attacks with ${weapon} for ${damage} damage!`);
    this.health -= 5; // attacking is tiring, lose 5 health
    console.log(`${this.name} now has ${this.health} health.`);
}

attack.call(wizard, "Magic Staff", 25);

const archerLoadout = ["Bow & Arrow", 15];

attack.apply(archer, archerLoadout);

const gandalfAttack = attack.bind(wizard);
gandalfAttack("Fireball", 50);