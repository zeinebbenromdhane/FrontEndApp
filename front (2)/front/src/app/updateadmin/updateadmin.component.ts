import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../services/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent implements OnInit {

  id=this.activatedrouted.snapshot.params['id']
  form: FormGroup
  oneadmin :any
  fileToUpload: Array<File> = [];
  constructor(private activatedrouted:ActivatedRoute,private service: MyserviceService, private formbuilder: FormBuilder, private router: Router) { }



  ngOnInit()
    : void {
    this.form = this.formbuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      codeadmin: ['', Validators.required],
      password: ['', Validators.required],

    })
    this.detailadminfun ()

  }
detailadminfun(){
  this.service.detailAdmin(this.id).subscribe(
    (res) => {
      console.log ("message",res);
      this.oneadmin=res;
      this.form.patchValue({
        username:this.oneadmin.username,
        email:this.oneadmin.email,
        codeadmin:this.oneadmin.codeadmin,
       })
      //  this.router.navigateByUrl("/admin")
    },


   (error)=>{console.log("error",error)}
  )
}



  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }




  updateadmin() {

    let formdata = new FormData()
    formdata.append("username", this.form.value.username),
      formdata.append("email", this.form.value.email),
      formdata.append("password", this.form.value.password),
      formdata.append("codeadmin", this.form.value.codeadmin),
      formdata.append("file", this.fileToUpload[0]),


      formdata.append("role", "admin"),
      console.log("start to create")
    this.service.updateAdmin(this.id,formdata).subscribe(
      (res) => {
        console.log("succes to create:");
        this.router.navigateByUrl("/admin")
      }


      // (error)=>{console.log("error",error)}
    )



  }


}



