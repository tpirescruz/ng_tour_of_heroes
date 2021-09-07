import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Doctor Strange', ability: 'Sorcerer supreme', isAlive: true},
      {id:2, name:'Thanos', ability:'Strong', isAlive:false},
      {id:3, name:'Iron Man', ability:'Rich', isAlive:false},
      {id:4, name:'Dr Banner', ability:'Transforms into Hulk', isAlive:true},
      {id:5, name:'Thor', ability:'God of Thunder', isAlive:true},
      {id:6, name:'Black Widow', ability:'Super spy', isAlive:false},
      {id:7, name:'Shang-Chi', ability:'Martial arts dude', isAlive:true},
      {id:8, name:'Captain Marvel', ability:'Super spy', isAlive:true},
      {id:9, name:'Gamora', ability:'Green mainly', isAlive:true},
      {id:10, name:'Loki', ability:'God of Trickery', isAlive:true},
      {id:12, name:'Star-Lord', ability:'Space Pirate', isAlive:true}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }

}
