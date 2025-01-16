import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../services/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {

  id=this.activatedrouted.snapshot.params['id']
  form: FormGroup
  oneclient :any
  fileToUpload: Array<File> = [];
  constructor(private activatedrouted:ActivatedRoute,private service: MyserviceService, private formbuilder: FormBuilder, private router: Router) { }



  ngOnInit()
    : void {
    this.form = this.formbuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      codeclient: ['', Validators.required],
      password: ['', Validators.required],

    })
    this.detailclientfun ()

  }
detailclientfun(){
  this.service.detailClient(this.id).subscribe(
    (res) => {
      console.log ("message",res);
      this.oneclient=res;
      this.form.patchValue({
        username:this.oneclient.username,
        email:this.oneclient.email,
        codeadmin:this.oneclient.codeclient,
       })
      //  this.router.navigateByUrl("/client")
    },


   (error)=>{console.log("error",error)}
  )
}



  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }




  updateclient() {

    let formdata = new FormData()
    formdata.append("username", this.form.value.username),
      formdata.append("email", this.form.value.email),
      formdata.append("password", this.form.value.password),
      formdata.append("codeclient", this.form.value.codeclient),
      formdata.append("file", this.fileToUpload[0]),


      formdata.append("role", "client"),
      console.log("start to create")
    this.service.addAdmin(formdata).subscribe(
      (res) => {
        console.log("succes to create:");
        this.router.navigateByUrl("/client")
      }


      // (error)=>{console.log("error",error)}
    )



  }


}
