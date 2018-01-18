import { Injectable } from '@angular/core';

@Injectable()
export class BuyersService {
  buyers;

  constructor() {
    this.buyers = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        products: [
          {name: 'Televizor'},
          {name: 'Mikrotalasna'},
          {name: 'Mobilni'},
        ]
      },
      {
        id: 2,
        firstName: 'Johnathan',
        lastName: 'Doehov',
        email: 'johnathan@example.com',
        products: [
          {name: 'Knjiga'},
          {name: 'Olovka'},
          {name: 'Bicikli'},
        ]
      },
      {
        id: 3,
        firstName: 'Martin',
        lastName: 'Hess',
        email: 'martin@example.com',
        products: [
          {name: 'Slusalice'},
          {name: 'USB'},
          {name:  'Roleri'},
        ]
      },
      {
        id: 4,
        firstName: 'Marc',
        lastName: 'Hently',
        email: 'marc@example.com',
        products: [
          {name: 'Jastuk'},
          {name: 'Krevet'},
          {name: 'Dusek'},
        ]
      }
    ]
   }

  public getBuyers()
  {
    return this.buyers;
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

}