import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryListRoutingModule } from './category-list-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoryListRoutingModule
  ]
})
export class CategoryListModule { }
