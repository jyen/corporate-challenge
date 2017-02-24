/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {Router} from "@angular/router";
import {AuthService} from "../shared/auth/auth.service";

describe('Component: Login', () => {

  let authServiceMock: AuthService;

  let currentUser = {};

  authServiceMock.login = jasmine.createSpy('login').and.callFake(
      () => Promise
          .resolve(true)
          .then(() => Object.assign({}, currentUser))
  );

  let routerMock: Router;
  it('should create an instance', () => {
    let component = new LoginComponent(authServiceMock, routerMock);
    expect(component).toBeTruthy();
  });
});
