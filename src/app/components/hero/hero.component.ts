import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: any = {};
  verdad: boolean = null;

  constructor( private activateRoute: ActivatedRoute, private _heroesService: HerosService ) {

    this.activateRoute.params.subscribe( params => {
      console.log(params);
      this.hero = _heroesService.getHero(params['id']);
      console.log(this.hero);
      if (this.hero['casa'] === 'DC') {
        this.verdad = true;
      } else {
        this.verdad = false;
      }

      console.log(this.verdad);
    } )

   }

  ngOnInit() {
  }

}
