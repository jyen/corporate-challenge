import {
    Http, RequestOptionsArgs, Response, RequestOptions, Headers, XSRFStrategy,
    CookieXSRFStrategy
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {AppComponent} from "../../app.component";

@Injectable()
export class HttpService {

  constructor(protected http: Http) {
  }


  public get<T>(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.get(url, this.getRequestOptionArgs(options))
        .map((res: Response) => <T>res.json())
        .catch(this.handleErrorResponse);
  }

  public post (url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const bodyJson = JSON.stringify(body);
    return this.http.post(url, bodyJson, this.getRequestOptionArgs(options))
        .map((res: Response) => res.json())
  }

  public put<T>(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(this.http.put(url, body, this.getRequestOptionArgs(options))
        .map((res: Response) => <T>res.json())
        .catch(this.handleErrorResponse));
  }

  public delete<T>(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(this.http.delete(url, this.getRequestOptionArgs(options))
        .map((res: Response) => <T>res.json())
        .catch(this.handleErrorResponse));
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
    // console.log('test');
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    // options.headers.append('Authorization', 'Bearer abc');
    options.headers.append('Content-Type', 'application/json');
    return options;
  }

  private handleErrorResponse(res) {
    return Observable.throw(res.json());
  }

  private intercept(observable: Observable<Response>): Observable<Response> {
    console.log('INTERCEPT');
    return observable.catch((err, source) => {
      // if (err.status  == 401 && !_.endsWith(err.url, 'api/auth/login')) {
      //   this._router.navigate(['/login']);
      //   return Observable.empty();
      // } else {
        return Observable.throw(err);
      // }
    });

  }
}