import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscriber, subscribeOn } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  form: FormGroup;
  fileToUpload: Array<File> = [];

  constructor(private service: MyserviceService, private formbuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      codeclient :['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }

  createClient() {
    let formdata = new FormData();
   
console.log("username", this.form.value.username)
console.log("email", this.form.value.email)
console.log("password", this.form.value.password)
console.log("phone", this.form.value.phone)
console.log("codeclient", this.form.value.codeclient)





    formdata.append("username", this.form.value.username);

    formdata.append("email", this.form.value.email);
    formdata.append("password", this.form.value.password);
    formdata.append("phone", this.form.value.phone);
    formdata.append("codeclient", this.form.value.codeclient),
    formdata.append("file", this.fileToUpload[0]); // Assuming you only allow one file to be uploaded
    formdata.append("role", "client"),
      console.log("start to create")

    this.service.addClient(formdata).subscribe(
      (res) => {
        console.log("Successfully created client:", res);
        this.router.navigateByUrl("/client")
      },
      (error) => {
        console.log("Error:", error);
        this.router.navigateByUrl("/client")
      }
    );
  }
}