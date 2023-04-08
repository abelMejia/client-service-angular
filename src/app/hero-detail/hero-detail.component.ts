import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../shared/interfaces/hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit, DoCheck {
    @Input() hero?: Hero;
    @Input() todos?: any;

    constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
    ) { }

    ngOnInit(): void {
        this.getHero();
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes', changes);
    }

    ngDoCheck(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (this.hero && this.hero.id !== id ) {
            console.info('lifeCycle ngDoCheck');
            this.getHero();
        }
    }

    getHero(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

}
