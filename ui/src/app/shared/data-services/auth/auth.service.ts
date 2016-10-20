import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';


import {HttpService} from '../../util/http.service'

import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  constructor(private http: HttpService) { }

  public login(credential) {
    console.log('auth');
    return this.http
        .post(`/auth/local`, credential)
        .map((r: Response) => r.json().data)
        .catch( err => {
            console.log('token test');
          return Observable.throw(err);
        })
        .subscribe( abc => {
          console.log(abc);
        });
  }

}
