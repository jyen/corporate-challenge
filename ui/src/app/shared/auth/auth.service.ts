import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';


import {HttpService} from '../util/http.service'

import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "../data-services/user/user.service";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {

  private authUrl : string = '/auth/local';

  public currentUser;
  private authErrors;
  public redirectUrl: string;

  constructor(private http: HttpService, private router: Router,
  private userService: UserService, private toastrService: ToastrService) {
  }

  public login(credential) {
    return this.http
        .post(this.authUrl, credential)
        .map((r: any) => {
            Cookie.set('token', r.token);
            return r;
        })
        .catch( err => {
            this.toastrService.error(err.json().message, 'Login Error');
            return Observable.throw(err);
        })
        .flatMap((r: any) => {
            return this.userService.getCurrentUser();
        })
        .catch( err => {
            return Observable.throw(err);
        })
        .subscribe(r => {
            this.setCurrentUser(r);
            this.router.navigate(['/core/dashboard']);
        }, err => {
            this.authErrors = <any> err.json();
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

    public isAdmin() : boolean {
        return this.currentUser.role === 'admin' ? true : false;
    }

  public setCurrentUser(user): void {
      this.currentUser = user;
  }

    public getCurrentUser() {
        return this.currentUser;
    }

  public getAuthErrors() {
      return this.authErrors;
  }

  public createUser(userObject) {
      this.userService.createUser(userObject)
          .map(r => {
              Cookie.set('token', r.token);
              return this.userService.getCurrentUser();
          })
          .subscribe( r => {
              this.currentUser = r;
              this.router.navigate(['/core/dashboard']);
          }, err => {
              console.log(err.json());
          });
  }

}
