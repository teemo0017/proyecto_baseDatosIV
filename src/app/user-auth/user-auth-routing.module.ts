import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/page/page.component';
import { PageRegisterComponent } from './register/page/page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPetsComponent } from './dashboard/components/add-pets/add-pets.component';
import { AddCitaComponent } from './dashboard/components/add-cita/add-cita.component';


const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'register',
    component: PageRegisterComponent

  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'register/pet',
    component : AddPetsComponent
  },  {
    path: 'register/cite',
    component : AddCitaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
