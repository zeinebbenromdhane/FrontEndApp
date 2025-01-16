import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber, subscribeOn } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  form: FormGroup
  fileToUpload: Array<File> = [];
  constructor(private service: MyserviceService, private formbuilder: FormBuilder, private router: Router) { }



  ngOnInit()
    : void {
    this.form = this.formbuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      codeadmin: ['', Validators.required],
      password: ['', Validators.required],

    })

  }


  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }




  createadmin() {

    let formdata = new FormData()
    formdata.append("username", this.form.value.username),
      formdata.append("email", this.form.value.email),
      formdata.append("password", this.form.value.password),
      formdata.append("codeadmin", this.form.value.codeadmin),
      formdata.append("file", this.fileToUpload[0]),


      formdata.append("role", "admin"),
      console.log("start to create")
    this.service.addAdmin(formdata).subscribe(
      (res) => {
        console.log("succes to create:");
        this.router.navigateByUrl("/admin")
      }


      // (error)=>{console.log("error",error)}
    )



  }


}
