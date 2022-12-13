import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityNavlinkComponent } from './security-navlink.component';

describe('SecurityNavlinkComponent', () => {
  let component: SecurityNavlinkComponent;
  let fixture: ComponentFixture<SecurityNavlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityNavlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityNavlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
