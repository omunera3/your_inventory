import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListRoutingModule } from './product-list-routing.module';
import { StructureViewsService } from 'src/app/core/shared/services/structure-views.service';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ],
  providers: [
    StructureViewsService
  ]
})
export class ProductListModule { }
