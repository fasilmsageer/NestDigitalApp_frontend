import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  

  empcode=""
  empname=""
  designation=""
  salary=""
  phone=""
  empusername=""
  emppassword=""
  mail=""

  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,"salary":this.salary,"phone":this.phone,"empusername":this.empusername,
    "emppassword":this.emppassword,"mail":this.mail}
    console.log(data)
    
    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          this.empcode=""
          this.empname=""
          this.designation=""
          this.salary=""
          this.phone=""
          this.empusername=""
          this.emppassword=""
          this.mail=""
        } else{
          alert("something went wrong")

        }
        
      }
    )
  }



}
