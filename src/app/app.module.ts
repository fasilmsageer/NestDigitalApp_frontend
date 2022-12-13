import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LeaveManagementPortalComponent } from './leave-management-portal/leave-management-portal.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SearchSecurityComponent } from './search-security/search-security.component';
import { DeleteSecurityComponent } from './delete-security/delete-security.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeNavlinkComponent } from './employee-navlink/employee-navlink.component';
import { SecurityNavlinkComponent } from './security-navlink/security-navlink.component';

const myRoute=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"leavemanagement",
    component:LeaveManagementPortalComponent
  },
  {
    path:"viewEmployee",
    component:ViewEmployeeComponent
  },
  {
    path:"addEmployee",
    component:AddEmployeeComponent
  },
  {
    path:"searchEmployee",
    component:SearchEmployeeComponent
  },
  {
    path:"deleteEmployee",
    component:DeleteEmployeeComponent
  },
  {
    path:"viewSecurity",
    component:ViewSecurityComponent
  },
  {
    path:"addSecurity",
    component:AddSecurityComponent
  },
  {
    path:"searchSecurity",
    component:SearchSecurityComponent
  },
  {
    path:"deleteSecurity",
    component:DeleteSecurityComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LeaveManagementPortalComponent,
    AdminLoginComponent,
    AdminNavbarComponent,
    EmployeeNavbarComponent,
    AddEmployeeComponent,
    AddSecurityComponent,
    ViewSecurityComponent,
    ViewEmployeeComponent,
    SearchEmployeeComponent,
    SearchSecurityComponent,
    DeleteSecurityComponent,
    DeleteEmployeeComponent,
    EmployeeNavlinkComponent,
    SecurityNavlinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
