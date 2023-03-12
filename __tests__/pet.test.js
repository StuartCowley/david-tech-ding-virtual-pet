const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });

    it('has an initial age of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });

    it('increases the age by 1', () => {
      const pet = new Pet('Fido');

      pet.growUp();
      expect(pet.age).toEqual(1);
    })

    it('initial hunger level is 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    })

    it('increases the hunger level by 5', () => {
      const pet = new Pet('Fido');

      pet.growUp();
      expect(pet.hunger).toEqual(5);
    })

    it('has an initial fitness of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
      })

    it('decreases the fitness level by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
      })
  });