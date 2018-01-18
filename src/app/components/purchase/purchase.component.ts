import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../services/buyers.service';
import { Buyer } from '../../models/buyer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent implements OnInit {
  private buyer: Buyer;

  constructor(private _buyersService :BuyersService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.buyer = this._buyersService.getBuyerId(id);
  }

}
