import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { CategoryListComponent } from './category-list/category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';



@NgModule({
  declarations: [
    CategoryListComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
