import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  viewEmployee=()=>
  {
    return this.http.get("http://localhost:8080/viewemployee")
  }
  
  searchEmployee=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchemployee",dataToSend)
  }
  viewSecurity=()=>
  {
    return this.http.get("http://localhost:8080/viewsecurity")
  }
  addEmployee=(data:any)=>
  {
    return this.http.post("http://localhost:8080/addemployee",data)
  }

 
}
