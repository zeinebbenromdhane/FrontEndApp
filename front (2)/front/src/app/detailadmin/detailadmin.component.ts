import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-detailadmin',
  templateUrl: './detailadmin.component.html',
  styleUrls: ['./detailadmin.component.css']
})
export class DetailadminComponent implements OnInit {
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
 
    //  this.router.navigateByUrl("/admin")
  },


 (error)=>{console.log("error",error)}
)
}






}




  //update admin
  //oneadminfunction
  //onint
  //service
  //construceur



