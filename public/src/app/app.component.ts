import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoggedIn: boolean;
  user: any;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    let userId = localStorage.getItem('userId');

    if (userId) {
      this.isLoggedIn = true;

      let tempObservable = this._http.getUser(userId);
      tempObservable.subscribe((user) => this.user = user);
      
    } else {
      this.isLoggedIn = false;
    }
  }

  dataFromChild(eventData) {
    console.log(eventData);
  }

}
