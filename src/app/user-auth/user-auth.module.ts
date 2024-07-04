import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthRoutingModule } from './user-auth-routing.module';

import { PageLoginComponent } from './login/page/page.component';
import { FormsModule } from '@angular/forms';
import { FormLoginComponent } from './login/components/form/form.component';
import {PageRegisterComponent } from './register/page/page.component';
import { FormRegisterComponent } from './register/components/form/form.component';




@NgModule({
  declarations: [
    PageLoginComponent,
    FormLoginComponent,
    PageRegisterComponent,
    FormRegisterComponent

  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    FormsModule,

  ]
})
export class UserAuthModule { }
