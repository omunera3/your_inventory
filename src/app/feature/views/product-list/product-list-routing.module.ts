import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    component: ProductListComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
