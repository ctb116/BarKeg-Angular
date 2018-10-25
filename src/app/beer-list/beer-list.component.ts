import { Component, Input, Output, EventEmitter} from '@angular/core';
import { BeerBar } from '../model/beerbar.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent {

  @Input() childBeerList: BeerBar[];
  @Output() clickSender = new EventEmitter();

  sellPint(beer) {
  beer.pint--;
  if(beer.pint < 0) {
    beer.pint = 0;
  }
}

editButtonClicked(beerToEdit : BeerBar){
  this.clickSender.emit(beerToEdit);
}

  pintLight(beer){
    if(beer.pint < 10) {
      return "bg-danger";
    }
  }

  priceColor(beer){
    if(beer.price <5){
      return {'background-color':'#DCD5FF'};
    } else {
      return {'background-color':'#8DFFC1'};
    }
  }

  iconBeer(beer){
    if(beer.abv >2 && beer.abv <4){
      return "fa fa-beer";
    } else if(beer.abv >5 && beer.abv <9){
      return "fa fa-beer";
    }else{
      return "fa fa-free-code-camp";
    }
  }

}
