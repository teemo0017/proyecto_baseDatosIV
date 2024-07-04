import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/page/page.component';
import { PageRegisterComponent } from './register/page/page.component';


const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'register',
    component: PageRegisterComponent

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
