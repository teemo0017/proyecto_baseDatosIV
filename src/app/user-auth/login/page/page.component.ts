import { Component } from '@angular/core';
import { LoginService } from '../services/page.service';
import { userLogin } from '../interfaces/userLogin';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageLoginComponent {

  constructor(private loginService : LoginService){ }

  public user! : userLogin;

  captureUserEmiter(userLogin : userLogin) : void{

    this.test(userLogin);

  }


  test(user : userLogin){
    this.loginService.verifyUser(user.username,user.password);
  }
}
