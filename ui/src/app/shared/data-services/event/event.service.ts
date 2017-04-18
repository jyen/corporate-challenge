import {Injectable} from '@angular/core';
import {HttpService} from "../../util/http.service";
import {Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class EventService {

  private eventUrl: string = `/api/events`

  constructor(private  http: HttpService) {
  }

  public createEvent(event) {
      console.log(event);
    return this.http.post(`${this.eventUrl}`, event)
        .map((r: Response) => r)
        .catch(err => {
          return Observable.throw(err);
        });
  }

  public updateEvent(event) {
    return this.http.put(`${this.eventUrl}/${event._id}`, event)
        .map((r: Response) => r)
        .catch(err => {
          return Observable.throw(err);
        });
  }

  public joinEvent(event) {
    return this.http.post(`${this.eventUrl}/${event._id}/join`, event)
        .map((r: Response) => r)
        .catch(err => {
          return Observable.throw(err);
        });
  }

  public leaveEvent(event) {
    return this.http.put(`${this.eventUrl}/${event._id}/events`, event)
        .map((r: Response) => r)
        .catch(err => {
          return Observable.throw(err);
        });
  }

}
