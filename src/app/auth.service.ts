declare function require(name: string);

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

var OAuth = require('OAuth');
var clientOaut = require('client-oauth2');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  githubAuth = null;
  API_ENDPOINT = 'http://localhost:4300/api';
  constructor(private http: HttpClient) {
   }

   getAuthURL(): Observable<any> {
      return this.http.get(this.API_ENDPOINT + '/user/url');
   }

   getToken(tokenData): Observable<any> {
    return this.http.post(this.API_ENDPOINT + '/user/auth' , tokenData);
  }

  getGroups() {
    return this.http.get(this.API_ENDPOINT + '/user/group');
  }

  getExpensesByGroupId() {
    return this.http.post(this.API_ENDPOINT + '/user/expenses' , {groupId: 17107190});
  }

}
