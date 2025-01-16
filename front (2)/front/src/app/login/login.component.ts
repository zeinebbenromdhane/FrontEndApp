import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../services/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 listres:any
  form: FormGroup
  resultatlogin :any

  constructor(private service: MyserviceService, private formbuilder: FormBuilder, private router: Router) { }



  ngOnInit()
    : void {
    this.form = this.formbuilder.group({
      username: ['', Validators.required],
    
      password: ['', Validators.required],

    })
   
  }






  login() {

    // let formdata = new FormData()
    // formdata.append("username", this.form.value.username),
    
    //   formdata.append("password", this.form.value.password),

      let data={"username":this.form.value.username,"password":this.form.value.password}
     
      console.log("data for login",data)
   
  
 this.service.login(data).subscribe(
   (res) => {
     console.log("res login:", res);
     this.resultatlogin=res;
     localStorage.setItem("token",this.resultatlogin.accessToken)
     localStorage.setItem("idconnected",this.resultatlogin.id)
     localStorage.setItem('state','0')
     console.log("state",localStorage.getItem("state"))
localStorage.setItem("role",this.resultatlogin.role)


     console.log("role login:",  this.resultatlogin.role);

     if (this.resultatlogin.role === 'admin') {
      
      this.router.navigate(['/admin']);
   } else  {
    if (this.resultatlogin.role === 'client')
      this.router.navigateByUrl("/produit")

      }
    }
      ,

      (error)=>{console.log("error",error)}
    )



  }

}






