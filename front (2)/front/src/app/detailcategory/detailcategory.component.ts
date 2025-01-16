import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../services/myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailcategory',
  templateUrl: './detailcategory.component.html',
  styleUrls: ['./detailcategory.component.css']
})
export class DetailcategoryComponent implements OnInit {

  detailcategory:any
  id=this.activatedrouted.snapshot.params['id']
  form:FormGroup
  fileToUpload: Array<File> = [];
  constructor( private service: MyserviceService,private formbuilder:FormBuilder ,private activatedrouted:ActivatedRoute ){ }

  
  
  
  ngOnInit()
  : void {
    this.form=this.formbuilder.group({
      username:['',Validators.required],
      email:['',Validators.required],
      num:['',Validators.required],

    action:['',Validators.required],
    
})
this.detailcategoryfun()
  }
  detailcategoryfun()
  {
    this.service.detailCategory(this.id).subscribe(
      (res) => {
        console.log ("les details des category",res);
        this.detailcategory=res;
     
        //  this.router.navigateByUrl("/admin")
      },
    
    
     (error)=>{console.log("error",error)}
    )
    }
    
    
    
    
    
    
    }
    
