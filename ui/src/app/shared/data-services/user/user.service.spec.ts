/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import {XHRBackend, HttpModule} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {HttpService} from "../../util/http.service";
import {Router} from "@angular/router";

describe('Service: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        UserService,
        HttpService,
        { provide: XHRBackend, useClass: MockBackend },
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy("navigate"); }
        },
      ]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
