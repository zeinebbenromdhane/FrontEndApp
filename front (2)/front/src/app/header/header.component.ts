import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
item:any
role:any
admin="admin"
client="client"
constructor(private service: MyserviceService, private formbuilder: FormBuilder ,private router: Router) { }


  ngOnInit(): void {
    if(localStorage.getItem("token")!=null){this.item="LOGOUT"}
    else {this.item="LOGIN"}

  this.role=localStorage.getItem ("role")
  console.log("*****header role is ******", this.role)
  }

  logout()
  {
    localStorage.removeItem("idconnected");
    //localStorage.removeItem("token");
    console.log("token",localStorage.getItem("token"))
    localStorage.removeItem("state");
    console.log("state",localStorage.getItem("state"))
    
    localStorage.removeItem("role");

    this.service.logout(localStorage.getItem("token")).subscribe(
      (res)=>{alert("logout");
    this.router.navigateByUrl("/login")},
      (error)=>{console.log("error",error)}
    )
  }




}
