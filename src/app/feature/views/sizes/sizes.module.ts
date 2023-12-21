import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SizesComponent } from './sizes/sizes.component';
import { SizesRoutingModule } from './sizes-routing.module';

@NgModule({
  declarations: [
    SizesComponent
  ],
  imports: [
    CommonModule,
    SizesRoutingModule
  ]
})
export class SizesModule { }
