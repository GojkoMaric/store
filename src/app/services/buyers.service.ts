import { Injectable } from '@angular/core';

@Injectable()
export class BuyersService {

  constructor() { }

  public getBuyers()
  {
    return [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        products: []
      },
      {
        id: 2,
        firstName: 'Johnathan',
        lastName: 'Doehov',
        email: 'johnathan@example.com',
        products: []
      },
      {
        id: 3,
        firstName: 'Martin',
        lastName: 'Hess',
        email: 'martin@example.com',
        products: []
      },
      {
        id: 4,
        firstName: 'Marc',
        lastName: 'Hently',
        email: 'marc@example.com',
        products: []
      }
    ]
  }

}