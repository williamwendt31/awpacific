import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getUser(user_id) {
    return this._http.get(`/api/admin/${user_id}`);
  }

  checkLogin(loginInfo) {
    return this._http.post('/api/admin/login', loginInfo);
  }
}
