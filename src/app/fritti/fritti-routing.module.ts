import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrittiComponent } from './fritti.component';

const routes: Routes = [{ path: '', component: FrittiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrittiRoutingModule { }
