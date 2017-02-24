/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {HttpService} from "../util/http.service";
import {Router} from "@angular/router";
import {UserService} from "../data-services/user/user.service";

describe('Service: Auth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        AuthService,
        HttpService,
        UserService,
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy("navigate"); }
        },
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
