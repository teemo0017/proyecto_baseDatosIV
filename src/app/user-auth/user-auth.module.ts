import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthRoutingModule } from './user-auth-routing.module';

import { PageLoginComponent } from './login/page/page.component';
import { FormsModule } from '@angular/forms';
import { FormLoginComponent } from './login/components/form/form.component';
import { PageRegisterComponent } from './register/page/page.component';
import { FormRegisterComponent } from './register/components/form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPetsComponent } from './dashboard/components/add-pets/add-pets.component';
import { AddCitaComponent } from './dashboard/components/add-cita/add-cita.component';






@NgModule({
  declarations: [
    PageLoginComponent,
    FormLoginComponent,
    PageRegisterComponent,
    FormRegisterComponent,
    DashboardComponent,
    AddPetsComponent,
    AddCitaComponent,
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    FormsModule,

  ]
})
export class UserAuthModule { }
