import {
    Http, RequestOptionsArgs, Response, RequestOptions, Headers, URLSearchParams
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/Rx';
import {Router} from "@angular/router";
import * as _ from 'lodash';

@Injectable()
export class HttpService {

  constructor(protected http: Http, private router: Router) {
  }


  public get(url: string, options?: RequestOptionsArgs) {
    return this.intercept(this.http.get(url, this.getRequestOptionArgs(options))
        .map((res: Response) => res.json())
        .catch(this.handleErrorResponse));
  }

  public post(url: string, body: any, options?: RequestOptionsArgs) {
    const bodyJson = JSON.stringify(body);
    return this.intercept(this.http.post(url, bodyJson, this.getRequestOptionArgs(options))
        .map((res: Response) => res.json())
        .catch(this.handleErrorResponse));
  }

  public put(url: string, body: string, options?: RequestOptionsArgs) {
    return this.intercept(this.http.put(url, body, this.getRequestOptionArgs(options))
        .map((res: Response) => res.json())
        .catch(this.handleErrorResponse));
  }

  public delete(url: string, options?: RequestOptionsArgs) {
    return this.intercept(this.http.delete(url, this.getRequestOptionArgs(options))
        .map((res: Response) =>
            res.json())
        .catch(this.handleErrorResponse));
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs) {
    // console.log('test');
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }

    if (Cookie.get('token')) {
      options.headers.append('Authorization', 'Bearer ' + Cookie.get('token'));
    }

    if (options.search == null) {
      let search = new URLSearchParams();
      search.set('noCache', new Date().getTime().toString());
      options.search = search;
    }

    options.headers.append('Content-Type', 'application/json');
    return options;
  }

  private handleErrorResponse(res, err) {
    return Observable.throw(res);
  }

  private intercept(observable: Observable<Response>) {
    return observable.catch((err) => {
      if (err.status  == 401 && !_.endsWith(err.url, 'auth/local')) {
        Cookie.delete('token');
        this.router.navigate(['/login']);
        return Observable.empty();
      } else {
        return Observable.throw(err);
      }
    });

  }
}