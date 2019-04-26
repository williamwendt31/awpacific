import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  signup: {
    email: String,
    password: String,
    passwordConf: String,
    remember: Boolean,
    error: Boolean
  }

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.signup = { email: "", password: "", passwordConf: "", remember: false, error: false };
  }

  onSignUp() {
    if (this.signup.password != this.signup.passwordConf) {
      this.signup.error = true;
    }
  }

}
