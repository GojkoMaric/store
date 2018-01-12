import { Product } from "./product";

export class Buyer {
    id;
    firstName;
    lastName;
    email;
    products: Array<Product>;

    constructor(id, firstName, lastName, email, products)
    {
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.products=products;
    }
}
