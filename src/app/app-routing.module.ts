import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  {
    path: 'veterinaria',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  }
,
{
  path:'user',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
}
,
  {
    path:'**',
    redirectTo: 'veterinaria'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
