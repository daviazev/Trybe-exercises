import Animal from './Animal';
import Bird from './Bird';
import { Friend, SocialMediaAccount2 } from './Friend';
import MyClass from './myClass';
import SocialMediaAccount from './Profile';
import { Subclass, Superclass } from './Superclass';

const main = (animal: Animal) => {
  console.log(animal.age);
};

const myFunc = (obj: Superclass) => {
  if (obj.isSuper) return console.log('Supeeeer!');
  return console.log('Suuuub');
};

const ex1 = new Superclass();
const ex2 = new Subclass();

myFunc(ex1);
myFunc(ex2);

const parrot = new Bird('Papagaio', new Date(Date.parse('Aug 16, 2015')));

console.log(parrot.age);
parrot.fly();

/*
  Saída (código executado em Mar/2022):
  4
  Papagaio está voando!
  */

const number = new MyClass(100);

console.log(number.myFunc(100));

const socialMediaAccount = new SocialMediaAccount();
socialMediaAccount.editProfile('Manuella', 'manu@trybe.com');
socialMediaAccount.printProfile();

const socialMediaAccount2 = new SocialMediaAccount2();

const friendCarol = new Friend();
friendCarol.setNickname('Carol');

const friendFernando = new Friend();
friendFernando.setNickname('Fernando');

socialMediaAccount2.addFriend(friendCarol);
socialMediaAccount2.addFriend(friendFernando);
socialMediaAccount2.printFriends();
