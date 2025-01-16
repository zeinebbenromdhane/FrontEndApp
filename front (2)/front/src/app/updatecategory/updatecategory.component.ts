import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../services/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {

  onecat:any
  id=this.activatedrouted.snapshot.params['id']
  form:FormGroup
  onecategory :any
  fileToUpload: Array<File> = [];
  constructor( private service: MyserviceService,private formbuilder:FormBuilder,private activatedrouted:ActivatedRoute
    ,private router:Router ){ }
  
  
  
  ngOnInit()
  : void {
    this.form=this.formbuilder.group({
      name:['',Validators.required],
      description:['',Validators.required],   
})
this.detailcategoryfun()
    
  }

  updatecategory(){

      let formdata = new FormData()
      formdata.append("name",this.form.value.name),
      formdata.append("description",this.form.value.description),
      
      this.service.updateCategory(this.id,formdata).subscribe(
        (res)=>{ 
      console.log("succes to update:") ;
    this.router.navigateByUrl ("/category")}, 
      
      
        (error)=>{console.log("error",error)}
      )
    }





    detailcategoryfun(){ this.service.detailCategory(this.id).subscribe(
      (res) => {
        console.log ("message",res);
        this.onecategory=res;
        this.form.patchValue({
          name:this.onecategory.name,
          description:this.onecategory.description,
         })
        //  this.router.navigateByUrl("/category")
      },
      (error)=>{console.log("error",error)})
    }

  }
