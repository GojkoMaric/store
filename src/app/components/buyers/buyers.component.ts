import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../services/buyers.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {
  private buyers = [];
  newBuyer = {};

  constructor(private _buyersService :BuyersService) {
    this.buyers = this._buyersService.getBuyers();
  }

  removeBuyer(buyer)
  {
    let index = this.buyers.indexOf(buyer);
    this.buyers.splice(index,1);
  }

  addBuyer(){
    this._buyersService.addBuyers(this.newBuyer);
    this.newBuyer = {};
  }

  ngOnInit() {
    this.buyers = this._buyersService.getBuyers();
    this._buyersService.getBuyers().subscribe(data=>{
      this.buyers = data;
    },
    (err: HttpErrorResponse)=>{
      alert(`Backend returned code ${err.status} with message: ${err.error}`);
    })
  }

}
