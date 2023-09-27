// worked with Nathan Green, Carlos Sanchez, Fernanda Monroe, and Sergio Rodriguez

class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }

  attack(target){
    target.resilience -= this.power
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }

  alterStat(otherCard) {
    if (otherCard instanceof Unit) {
      if (this.stat == "power") {
        otherCard.power += this.magnitude;
      }
      if (this.stat == "resilience") {
        otherCard.resilience += this.magnitude;
      }
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}


const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4)
const blackBeltNinja = new Unit('blackBeltNinja', 4, 5, 4)

const hardAlgorithm = new Effect("HardAlgo", 2, 'increase target\'s resilience by 3', 'resilience', 3)
const unhandledPromiseRejection = new Effect("unhandledPromiseRejection", 1, 'reduce target\'s resilience by 2', 'resilience',-2)
const pairProgramming = new Effect("pairProgramming",3,"increase target's power by 2\t","power",2)


hardAlgorithm.alterStat(redBeltNinja)
unhandledPromiseRejection.alterStat(blackBeltNinja)
pairProgramming.alterStat(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)

