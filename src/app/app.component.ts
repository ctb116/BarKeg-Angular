import { Component } from '@angular/core';
import { BeerBar } from './model/beerbar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Welcome to the Cocoroco Bar!';


  beers: BeerBar[] = [
    new BeerBar('Cider', 'Angry Orchard', 4.50, 3.4, 124),
    new BeerBar('IPA', 'Deschutes Brewery', 7.40, 9.2, 124),
    new BeerBar('Stout', 'Cocoroco', 10.90, 12.0, 124)
  ];



  sellPint(beer) {
  beer.pint--;

  }

}
