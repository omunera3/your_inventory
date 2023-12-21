import { CategoryListComponent } from './category-list/category-list/category-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { ProductsComponent } from './products/products/products.component';
import { SaleComponent } from './sale/sale/sale.component';
import { SizesComponent } from './sizes/sizes/sizes.component';

@NgModule({
  declarations: [
    CategoryListComponent,
    ProductListComponent,
    ProductsComponent,
    SaleComponent,
    SizesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
