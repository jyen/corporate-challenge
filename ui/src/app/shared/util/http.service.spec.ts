/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpService } from './http.service';
import {XHRBackend, HttpModule} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {Router} from "@angular/router";

describe('Service: Http', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        HttpService,
        { provide: XHRBackend, useClass: MockBackend },
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy("navigate"); }
        }
      ]
    });
  });

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
