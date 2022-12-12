import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule } from '@angular/router';

const myRoute=[
  {
    path:"",
    component:AdminloginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
