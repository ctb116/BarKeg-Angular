import { Component } from '@angular/core';
import { BeerBar } from './model/beerbar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Welcome to the Cocoroco Bar!';

  masterBeerList: BeerBar[] = [
    new BeerBar('Cider', 'Angry Orchard', 4.50, 3.4, 15),
    new BeerBar('IPA', 'Deschutes Brewery', 7.40, 9.2, 15),
    new BeerBar('Stout', 'Cocoroco', 10.90, 12.0, 15)
  ];

selectedBeer: BeerBar = null;

editBeer(clickedBeer) {
  this.selectedBeer = clickedBeer;
}

finishedEditing() {
  this.selectedBeer = null;
}

}
