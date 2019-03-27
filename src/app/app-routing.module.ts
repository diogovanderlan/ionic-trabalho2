import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'teste',
    loadChildren: './checkbox/checkbox.module#CheckboxPageModule'
  },
  {
    path:'contato',
    loadChildren: './contato/contato.module#ContatoPageModule'
  },
  {
    path: 'sobre',
    loadChildren: './sobre/sobre.module#SobrePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'checkbox', loadChildren: './checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
