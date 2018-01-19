import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { Buyer } from '../models/buyer';

@Injectable()
export class BuyersService {
  buyers;

  constructor(private _productsService: ProductsService,
              private http: HttpClient) { }
  //   this.buyers = [
  //     {
  //       id: 1,
  //       firstName: 'John',
  //       lastName: 'Doe',
  //       email: 'john@example.com',
  //       products: [
  //         {name: 'Televizor'},
  //         {name: 'Mikrotalasna'},
  //         {name: 'Mobilni'},
  //       ]
  //     },
  //     {
  //       id: 2,
  //       firstName: 'Johnathan',
  //       lastName: 'Doehov',
  //       email: 'johnathan@example.com',
  //       products: [
  //         {name: 'Knjiga'},
  //         {name: 'Olovka'},
  //         {name: 'Bicikli'},
  //       ]
  //     },
  //     {
  //       id: 3,
  //       firstName: 'Martin',
  //       lastName: 'Hess',
  //       email: 'martin@example.com',
  //       products: [
  //         {name: 'Slusalice'},
  //         {name: 'USB'},
  //         {name:  'Roleri'},
  //       ]
  //     },
  //     {
  //       id: 4,
  //       firstName: 'Marc',
  //       lastName: 'Hently',
  //       email: 'marc@example.com',
  //       products: [
  //         {name: 'Jastuk'},
  //         {name: 'Krevet'},
  //         {name: 'Dusek'},
  //       ]
  //     }
  //   ]
  //  }

  public getBuyers()
  {
    // return this.buyers;
    return this.http.get<Buyer[]>('http://localhost:8000/buyers.php');
  }

  public addBuyers(newBuyer)
  {
    this.buyers.push(newBuyer);
  }

  public getBuyerId(id){
    return this.buyers.find(buyer => {
      return buyer['id'] == id;
    })
  }

  public buyerPurchase(product, id){
    let buyer = this.getBuyerId(id);
    this.addProduct(buyer, product);
  }

  public addProduct(buyer, product){
    buyer.products.push(product);
    this._productsService.removeQuantity(product.quantity)
  }

}