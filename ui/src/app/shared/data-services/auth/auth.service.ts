import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';


import {HttpService} from '../../util/http.service'

import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

    private authUrl : string = '/auth/local';

  constructor(private http: HttpService, private router: Router) { }

  public login(credential) {
    return this.http
        .post(this.authUrl, credential)
        .map((r: Response) => r)
        .catch( err => {
          return Observable.throw(err);
        });
  }

  public logout() {
      Cookie.delete('token');
      this.router.navigate(['/login']);
  }

}
