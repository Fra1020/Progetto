import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrittiRoutingModule } from './fritti-routing.module';
import { FrittiComponent } from './fritti.component';


@NgModule({
  declarations: [
    FrittiComponent
  ],
  imports: [
    CommonModule,
    FrittiRoutingModule
  ]
})
export class FrittiModule { }
