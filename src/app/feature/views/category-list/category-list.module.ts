import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryListRoutingModule } from './category-list-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StructureViewsService } from 'src/app/core/shared/services/structure-views.service';

@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoryListRoutingModule,
  ],
  providers: [
    StructureViewsService
  ]
})
export class CategoryListModule { }
