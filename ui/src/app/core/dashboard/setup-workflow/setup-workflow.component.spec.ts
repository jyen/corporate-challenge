import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupWorkflowComponent } from './setup-workflow.component';

describe('SetupWorkflowComponent', () => {
  let component: SetupWorkflowComponent;
  let fixture: ComponentFixture<SetupWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
