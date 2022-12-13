import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveManagementPortalComponent } from './leave-management-portal.component';

describe('LeaveManagementPortalComponent', () => {
  let component: LeaveManagementPortalComponent;
  let fixture: ComponentFixture<LeaveManagementPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveManagementPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveManagementPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
