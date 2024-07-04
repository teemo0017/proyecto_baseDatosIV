import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userLogin } from '../interfaces/userLogin';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private apiUrl : string = 'http://localhost:4000';
  private endpoint : string = '/auth/login';



  verifyUser(username:string , password:string) : void {

    const user : userLogin = {
      username : username,
      password : password
    }

    const url = this.apiUrl+this.endpoint;
    this.http.post(url,user).subscribe(token => console.log(token));
  }
}
