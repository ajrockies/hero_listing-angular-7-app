import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../modules/heros/shared/hero.service';
import { Hero } from 'src/app/modules/heros/shared/hero.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  heroes: any = null;
  constructor( private heroservice: HeroService) { }

  ngOnInit() {
    this.heroservice.getHeros().subscribe((data: any ) => this.heroes = data );
    console.log(this.heroes);
  }

}
