import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SizesComponent } from './sizes/sizes.component';
import { SizesRoutingModule } from './sizes-routing.module';
import { StructureViewsService } from 'src/app/core/shared/services/structure-views.service';

@NgModule({
  declarations: [
    SizesComponent
  ],
  imports: [
    CommonModule,
    SizesRoutingModule
  ],
  providers: [
    StructureViewsService
  ]
})
export class SizesModule { }
