import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';
import { Hero } from './shared/interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
    constructor() { }

    getHeroes(): Observable<Hero[]> {
        const heroes = of(HEROES);
        return heroes;
    }

    getHero(id: number): Observable<Hero> {
        const hero = HEROES.find(h => h.id === id)!;
        return of(hero);
    }
}
