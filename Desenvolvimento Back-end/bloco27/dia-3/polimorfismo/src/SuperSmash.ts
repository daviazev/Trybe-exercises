// PARA FIXAR

abstract class Character {
  talk(): void {}

  specialMove(): void {}
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('MeleeCharacter - talk()');
  }

  specialMove(): void {
    console.log('MeleeCharacter - specialMove()');
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log('LongRangeCharacter - talk()');
  }

  specialMove(): void {
    console.log('LongRangeCharacter - specialMove()');
  }
}

const myFunc = (character: Character) => {
  character.talk();
  character.specialMove();
};

const c1 = new MeleeCharacter();
const c2 = new LongRangeCharacter();

myFunc(c1);
myFunc(c2);
