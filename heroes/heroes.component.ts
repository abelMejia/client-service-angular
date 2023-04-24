import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
import { NewsletterService } from '../newsletter/newsletter.service';
import { Hero } from '../shared/interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    heroes$?: Observable<Hero[]>;
    selectedHero?: Hero;

    constructor(
        private heroService: HeroService
    ) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroes$ = this.heroService.getHeroes();
    }

}
