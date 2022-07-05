import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
   },
   { path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
    { path: 'home',
     loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  { path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule) },
  { path: 'panini', loadChildren: () => import('./panini/panini.module').then(m => m.PaniniModule) },
  { path: 'birra', loadChildren: () => import('./birra/birra.module').then(m => m.BirraModule) }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
