import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  constructor(private api:ApiService){}

  empusername=""
  emppassword=""

  readValue=()=>
  {
    if (this.empusername=="" && this.emppassword==""){
      
    }
  }

}
