const Pet = require('../src/pet');

describe('Pet', () => {
    let pet;

    beforeEach(() => {
     pet = new Pet('Fido');
     });

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
      expect(pet.name).toEqual('Fido');
    });

    it('has an initial age of 0', () => {
      expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('throws an error if the pet is not alive', () => {
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(')
      });

    it('increases the age by 1', () => {
        pet.growUp();
        expect(pet.age).toEqual(1);
      })
  
      it('initial hunger level is 0', () => {
        expect(pet.hunger).toEqual(0);
      })
  
      it('increases the hunger level by 5', () => {
        pet.growUp();
        expect(pet.hunger).toEqual(5);
      })
  
      it('has an initial fitness of 10', () => {
          expect(pet.fitness).toEqual(10);
        })
  
      it('decreases the fitness level by 3', () => {
          pet.growUp();
          expect(pet.fitness).toEqual(7);
        })
});
    
describe('walk', () => {
    it('throws an error if the pet is not alive', () => {
        pet.age = 30;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(')
      });

    it('increases the fitness level by 4, but not exceeding MAXIMUM_FITNESS of 10', () => {
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
})

describe('feed', () => {
    it('throws an error if the pet is not alive', () => {
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(')
      });

    it('decreases the hunger level by 3, but not excedding MINIMUM_FITNESS of 0', () => {
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    })
})
 });

 describe('checkUp', () => {
    it('throws an error if the pet is not alive', () => {
        pet.age = 30;
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(')
      })

    it('should return "I need a walk" if the pets fitness is 3 or less', () => {
        pet.fitness = 3;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I need a walk');
    });

    it('should return "I am hungry" if the pets hunger is 5 or more', () => {
        pet.hunger = 5;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I am hungry');
    });

    it('should return "I am hungry AND I need a walk" if the pets fitness is 3 or less and if hunger is 5 or more', () => {
        pet.hunger = 5;
        pet.fitness = 3;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });

    it('should return "I feel great!" if the pets hunger is 5 or less and fitness is 3 or more', () => {
        pet.hunger = 3;
        pet.fitness = 5;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I feel great!');
    });
 });

 describe('is the pet alive?', () => {
    it('should return "false" if the pets fitness is 0 or less', () => {
        pet.fitness = 0;
        pet.isAlive;
        expect(pet.isAlive).toEqual(false)
    });

    it('should return "false" if the pets hunger is 10 or more', () => {
        pet.hunger = 10;
        pet.isAlive;
        expect(pet.isAlive).toEqual(false)
    });

    it('should return "false" if the pets age is 30 or more', () => {
        pet.age = 30;
        pet.isAlive;
        expect(pet.isAlive).toEqual(false)
    });
 });
   
describe('adds child array to the element', () => {
    it ('should be able to have a baby pet', () => {
        const parent = new Pet ('Dave');
        const child = parent.adoptChild('Amelia');

        expect(parent.children[0].name).toEqual('Amelia');
        expect(parent.children[0].fitness).toEqual(10);
    });
    });
});