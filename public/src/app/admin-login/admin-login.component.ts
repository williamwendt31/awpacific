import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  login: {
    type: String,
    email: String,
    password: String,
    remember: Boolean;
    error: Boolean  
  }

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this.login = { type: '', email: '', password: '', remember: false, error: false };
  }

  onLogin(): void {
    let tempObservable = this._http.checkLogin(this.login);
    tempObservable.subscribe((result) => {
      console.log(result);
    });
  }

}
