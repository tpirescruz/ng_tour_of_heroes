import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { MessageService } from 'src/app/message.service';
import { Hero } from '../../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  

  heroes: Hero[] = []
  isAlive : boolean = false


  constructor( private heroService : HeroService, private messageService: MessageService) { }
  
  
  
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  add(name: string, ability: string, isAlive: boolean):void {
    name = name.trim()
    ability = ability.trim()
    if (!name) { return; }
    this.heroService.addHero({name, ability, isAlive} as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }
  delete(hero: Hero):void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe()
  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
