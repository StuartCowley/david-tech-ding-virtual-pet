const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
    growUp() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    },

    walk() {
     if((this.fitness + 4) <= 10){
        return this.fitness += 4;
    } else {
        return this.fitness = MAXIMUM_FITNESS;
    }
    },

    feed() {
     if((this.hunger -3) >= 0){
        return this.hunger -=3;
     } else {
        return this.hunger = MINIMUM_HUNGER;
     }
    },

    checkUp() {
     if(this.fitness <= 3 && this.hunger >= 5){
        return 'I am hungry AND I need a walk';
     } else if (this.fitness <=3){
        return 'I need a walk'
     } else if (this.hunger >= 5) {
        return 'I am hungry';
     } else {
        return 'I feel great!'
     }
    }
}

module.exports = Pet;