import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../services/buyers.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {
  private buyers = [];

  constructor(private _buyersService :BuyersService) {
    this.buyers = this._buyersService.getBuyers();
  }

  removeBuyer(buyer)
  {
    let index = this.buyers.indexOf(buyer);
    this.buyers.splice(index,1);
  }

  ngOnInit() {
  }

}
