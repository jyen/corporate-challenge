import {Injectable} from '@angular/core';
import {HttpService} from "../../util/http.service";
import {Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

    private userUrl: string = `/api/users`;

    constructor(private  http: HttpService) {
    }

    public getCurrentUser() {
        return this.http.get(`${this.userUrl}/me`)
            .map((r: Response) => r)
            .catch(err => {
                console.log(err);
                return Observable.throw(err);
            });
    }

    public getUser(id) {
        return this.http.get(`${this.userUrl}/${id}`)
            .map((r: Response) => r)
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public updateUser(user) {
        return this.http.put(`${this.userUrl}/${user._id}`, user)
            .map((r: Response) => r)
            .catch(err => {
                return Observable.throw(err);
            });
    }

  public updateMe(user) {
    return this.http.put(`${this.userUrl}/me`, user)
        .map((r: Response) => r)
        .catch(err => {
          return Observable.throw(err);
        });
  }

  public createUser(user) {
        return this.http.post(`${this.userUrl}`, user)
            .map((r: Response) => r)
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public joinOrganization(org) {
        return this.http.post(`${this.userUrl}/me/join/${org._id}`, org)
            .map((r: Response) => r)
            .catch(err => {
                return Observable.throw(err);
            });
    }

}
