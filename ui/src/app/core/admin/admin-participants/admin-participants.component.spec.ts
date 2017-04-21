import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParticipantsComponent } from './admin-participants.component';

describe('AdminParticipantsComponent', () => {
  let component: AdminParticipantsComponent;
  let fixture: ComponentFixture<AdminParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
