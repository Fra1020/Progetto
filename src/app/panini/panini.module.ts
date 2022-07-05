import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaniniRoutingModule } from './panini-routing.module';
import { PaniniComponent } from './panini.component';


@NgModule({
  declarations: [
    PaniniComponent
  ],
  imports: [
    CommonModule,
    PaniniRoutingModule
  ]
})
export class PaniniModule { }
