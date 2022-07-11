import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarniComponent } from './carni.component';

const routes: Routes = [{ path: '', component: CarniComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarniRoutingModule { }
