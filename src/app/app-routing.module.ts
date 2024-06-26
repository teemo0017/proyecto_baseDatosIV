import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageInicioComponent } from './inicio/page/page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { InfoPrincipalComponent } from './inicio/components/info-principal/info-principal.component';



const routes: Routes = [
  {
    path: 'inicio',
    component: InfoPrincipalComponent
  },

  {
    path:'**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
