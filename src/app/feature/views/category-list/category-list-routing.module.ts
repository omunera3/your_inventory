import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent
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
export class CategoryListRoutingModule { }
