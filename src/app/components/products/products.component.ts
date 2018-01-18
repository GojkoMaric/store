import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products;
  private filterProduct='';

  constructor(private _productsService: ProductsService) {
    this.products = this._productsService.getProducts();
   }

  ngOnInit() {
    this.products = this._productsService.getProducts();
  }

}
