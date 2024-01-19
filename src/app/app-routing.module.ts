import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'category-list',
    loadChildren: () => import('./feature/views/category-list/category-list.module').then(m => m.CategoryListModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./feature/views/product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: 'sizes',
    loadChildren: () => import('./feature/views/sizes/sizes.module').then(m => m.SizesModule)
  },
  { path: '', redirectTo: '/category-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/category-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
