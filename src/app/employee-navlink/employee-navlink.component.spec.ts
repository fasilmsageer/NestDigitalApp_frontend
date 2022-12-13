import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNavlinkComponent } from './employee-navlink.component';

describe('EmployeeNavlinkComponent', () => {
  let component: EmployeeNavlinkComponent;
  let fixture: ComponentFixture<EmployeeNavlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeNavlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeNavlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
