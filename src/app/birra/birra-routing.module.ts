import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirraComponent } from './birra.component';

const routes: Routes = [{ path: '', component: BirraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BirraRoutingModule { }
