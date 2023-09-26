class Ninja {
  constructor(name, health = 90, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName(){
    console.log(this.name)
  }

  showStats(){
    console.log(
        "Name:\t", this.name,
        "\nSTR:\t", this.strength,
        "\nSPD:\t", this.speed,
        "\nHP:\t\t", this.health)
  }

  drinkSake(){
    this.health += 10
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
