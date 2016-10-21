import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';


import {HttpService} from '../util/http.service'

import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "../data-services/user/user.service";

@Injectable()
export class AuthService {

  private authUrl : string = '/auth/local';

  private currentUser;

  constructor(private http: HttpService, private router: Router,
  private user: UserService) {
  }

  public login(credential) {
    return this.http
        .post(this.authUrl, credential)
        .map((r) => {
            Cookie.set('token', r.token);
            return this.user.getCurrentUser();
        })
        .catch( err => {
          return Observable.throw(err);
        })
        .subscribe(r => {
            this.currentUser = r;
            this.router.navigate(['/core/dashboard']);
        });
  }

  public logout() {
      Cookie.delete('token');
      this.currentUser = null;
      this.router.navigate(['/login']);
  }

  public isLoggedIn() : boolean {
      return this.currentUser ? true : false;
  }

  public setCurrentUser(user): void {
      this.currentUser = user;
  }

}
