import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
   canActivate: [AuthGuard]
  },
  {
    path: 'home-help',
    loadChildren: () => import('./home-help/home-help.module').then( m => m.HomeHelpPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),
  },
  {
    path: 'categoria/:id',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule),
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule),
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'listaproductos',
    loadChildren: () => import('./listaproductos/listaproductos.module').then( m => m.ListaproductosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
