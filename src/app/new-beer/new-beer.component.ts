import { Component, Output, EventEmitter } from '@angular/core';
import {BeerBar} from '../model/beerbar.model';
@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent {
  @Output() sendBeer = new EventEmitter();

submitForm(name: string, brand: string, price: number, abv: number, pint: number){
  let newBeer: BeerBar = new BeerBar(name, brand, price, abv, pint);
  this.sendBeer.emit(newBeer);
  // this.addNewBeer = null;
}
// addNewBeer: BeerBar = null;
//
// addBeerMenu(clickedAdd) {
//   this.addNewBeer = clickedAdd;
// }


}
