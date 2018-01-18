import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  private products;

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Televizor',
        quantity: 120
      },
      {
        id: 2,
        name: 'Mobilni',
        quantity: 15,
      },
      {
        id: 3,
        name: 'Kompjuter',
        quantity: 24,
      }
    ]
   }

   public getProducts(){
     return this.products;
   }

}
