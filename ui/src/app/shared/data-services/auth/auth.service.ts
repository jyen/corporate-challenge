import { Injectable } from '@angular/core';

import {Response, Http} from '@angular/http';
import { Observable } from 'rxjs';

import {HttpService} from '../../util/http.service'

import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  public login(credential) {
    console.log('auth');
    return this.http
        .post(`api/auth/local`, credential)
        // .toPromise()
        // .then((test) => {console.log(test)})
        .map((r: Response) => r.json().data)
        .subscribe( abc => {
          console.log(abc);
        });
  }

}
