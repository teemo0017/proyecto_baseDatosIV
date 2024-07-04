import { Component, EventEmitter, Output } from '@angular/core';
import { userRegister } from '../../interfaces/userRegister';

@Component({
  selector: 'register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormRegisterComponent {

  @Output()
  userEmiter : EventEmitter<userRegister> = new EventEmitter()

   user: userRegister = {
    username : '',
    password: '',
    fistname: '',
    lastname: '',
    country: '',
    email: '',
    rol: 'USER'
  }

  emitUser(): void{
    // this.userEmiter.emit(this.user);
    console.log(this.user);
}
}
