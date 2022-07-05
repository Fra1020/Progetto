import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaniniComponent } from './panini.component';

const routes: Routes = [{ path: '', component: PaniniComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaniniRoutingModule { }
