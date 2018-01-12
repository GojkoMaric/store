import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NabBarComponent } from './components/nab-bar/nab-bar.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';
import { LayoutComponent } from './components/layout/layout.component';

const appRoutes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'buyers', component: BuyersComponent},
  {path: 'products', component: ProductsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NabBarComponent,
    BuyersComponent,
    ProductsComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
