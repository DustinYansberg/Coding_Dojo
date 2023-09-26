const { Ninja } = require("./ninja");

class Sensai extends Ninja {
  constructor(name, wisdom = 10, health = 200, speed = 10, strength = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }

  speakWisdom() {
    this.drinkSake();
    console.log(
      "\nWhat one programmer can do in one month, two programmers can do in two months.\n"
    );
  }
}

sensai = new Sensai("Master Splinter");

sensai.speakWisdom();
