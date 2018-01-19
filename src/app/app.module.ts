import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NabBarComponent } from './components/nab-bar/nab-bar.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersService } from './services/buyers.service';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { ProductsService } from './services/products.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const appRoutes: Routes = [
  {path: '',
  redirectTo: '/products',
  pathMatch: 'full'
  },
  {path: 'buyers',
    component: BuyersComponent,
    children: [
      {
        path: ':id',
        component: PurchaseComponent,
      }
    ]
  },
  {path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: ':id',
        component: ProductDetailComponent,
      }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NabBarComponent,
    BuyersComponent,
    ProductsComponent,
    LayoutComponent,
    PurchaseComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [
    BuyersService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
