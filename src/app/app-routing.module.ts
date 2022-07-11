import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
   },
   { path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },

  { path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule) },
  { path: 'panini', loadChildren: () => import('./panini/panini.module').then(m => m.PaniniModule) },
  { path: 'birra', loadChildren: () => import('./birra/birra.module').then(m => m.BirraModule) },
  { path: 'carni', loadChildren: () => import('./carni/carni.module').then(m => m.CarniModule) },
  { path: 'fritti', loadChildren: () => import('./fritti/fritti.module').then(m => m.FrittiModule) }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
