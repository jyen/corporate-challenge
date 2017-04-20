import {Injectable} from '@angular/core';
import {HttpService} from "../../util/http.service";
import {Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class OrganizationService {

    private orgUrl: string = `/api/organizations`

    constructor(private  http: HttpService) {
    }

    public getOrganizations() {
        return this.http.get(`${this.orgUrl}`)
            .map((r: Response) => r)
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public getOrganization(id) {
        return this.http.get(`${this.orgUrl}/${id}`)
            .map((r: Response) => r)
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public createOrganization(org) {
        return this.http.post(`${this.orgUrl}`, org)
            .map((r: Response) => r)
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public joinOrganization(org) {
        return this.http.post(`${this.orgUrl}/${org._id}/join`, org)
            .map((r: Response) => r)
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public updateOrganization(org) {
        return this.http.put(`${this.orgUrl}/${org._id}`, org)
            .map((r: Response) => r)
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public createEvent(org, event) {
        return this.http.post(`${this.orgUrl}/${org._id}/events`, event)
            .map((r: Response) => r)
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public listEvents(org) {
        return this.http.get(`${this.orgUrl}/${org._id}/events`)
            .map((r: Response) => r)
            .catch(err => {
                return Observable.throw(err);
            });
    }

    public removeEvent(org, event) {
        return this.http.delete(`${this.orgUrl}/${org._id}/events/${event._id}`)
            .map((r: Response) => r)
            .catch(err => {
                return Observable.throw(err);
            });
    }

}
