import sortCharactersByHealth from "./App/app";

const myChar = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];
const sortedChar = sortCharactersByHealth(myChar);
console.log(myChar, sortedChar);
