import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { BuyersService } from '../../services/buyers.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private product: any = {};
  private buyers: any[] = [];
  private selectBuyerId: number;

  constructor(private _productsService: ProductsService,
              private route: ActivatedRoute,
              private _buyersService: BuyersService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.product = this._productsService.getProductById(id);
    // this.buyers = this._buyersService.getBuyers();
  }

  public buyerPurchase(product){
    if(this.selectBuyerId){
      this._buyersService.buyerPurchase(product, this.selectBuyerId);
    }else {
      alert('You need to select customers');
    }
  }

}
