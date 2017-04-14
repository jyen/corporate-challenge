import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupOrganizationComponent } from './setup-organization.component';

describe('SetupOrganizationComponent', () => {
  let component: SetupOrganizationComponent;
  let fixture: ComponentFixture<SetupOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
