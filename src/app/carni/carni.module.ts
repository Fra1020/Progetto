import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarniRoutingModule } from './carni-routing.module';
import { CarniComponent } from './carni.component';


@NgModule({
  declarations: [
    CarniComponent
  ],
  imports: [
    CommonModule,
    CarniRoutingModule
  ]
})
export class CarniModule { }
