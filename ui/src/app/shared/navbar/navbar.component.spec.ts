/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { AuthService } from "../auth/auth.service";
import {DebugElement} from "@angular/core";

describe('Component: Navbar', () => {
  let component;
  let authServiceMock: AuthService;

  let comp:    NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
      providers: [
        { provide: AuthService,
          userClass: class {
            login = jasmine.createSpy('login').and.callFake(
                () => Promise
                    .resolve(true)
                    .then(() => {})
            )
          }
        }
      ]
    });
    // let currentUser;
    //
    // authServiceMock.login = jasmine.createSpy('login').and.callFake(
    //     () => Promise
    //         .resolve(true)
    //         .then(() => Object.assign({}, currentUser))
    // );

    // component = new NavbarComponent(authServiceMock);
    TestBed.compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);

    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
