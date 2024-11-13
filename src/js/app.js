"use strict";
import {Bowerman, Swordsman, Magician, Daemon, Undead} from './heroes.js';
import Team from './Team';

let array = [
  new Bowerman('John'),
  new Swordsman('John'),
  new Magician('John'),
  new Daemon('John'),
  new Undead('John'),
  ];

let team = (new Team());
console.log(team);
team.add(array);
console.log(team);
console.log(team.get())
for (const person of team) {
  console.log(person);
}
console.log(team[Symbol.iterator]().next().value);