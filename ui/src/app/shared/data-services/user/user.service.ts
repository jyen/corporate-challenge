import { Injectable } from '@angular/core';
import {HttpService} from "../../util/http.service";
import {Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  private currentUserUrl : string = '/api/users/me?test=123';

  constructor(private  http: HttpService) { }

  public getCurrentUser() {
    return this.http.get(this.currentUserUrl)
        .map((r: Response) => r)
        .catch( err => {
          return Observable.throw(err);
        });
  }

}
