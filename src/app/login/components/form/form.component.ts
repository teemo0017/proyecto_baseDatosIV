import { Component, EventEmitter, Output } from '@angular/core';
import { userLogin } from '../../interfaces/userLogin';

@Component({
  selector: 'login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()
  public userEmiter : EventEmitter<userLogin> = new EventEmitter();

  user: userLogin = {
    username: '',
    password : ''
  }


  emitUser(): void{
      this.userEmiter.emit(this.user);

  }


  }

