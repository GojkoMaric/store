import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NabBarComponent } from './components/nab-bar/nab-bar.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersService } from './services/buyers.service';
import { PurchaseComponent } from './components/purchase/purchase.component';

const appRoutes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'buyers', component: BuyersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'buyers/:id', component: PurchaseComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NabBarComponent,
    BuyersComponent,
    ProductsComponent,
    LayoutComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [
    BuyersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
