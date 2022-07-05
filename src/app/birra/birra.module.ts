import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirraRoutingModule } from './birra-routing.module';
import { BirraComponent } from './birra.component';


@NgModule({
  declarations: [
    BirraComponent
  ],
  imports: [
    CommonModule,
    BirraRoutingModule
  ]
})
export class BirraModule { }
