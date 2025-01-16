import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../services/myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {


  id=this.activatedrouted.snapshot.params['id']
  form:FormGroup
  fileToUpload: Array<File> = [];
  constructor(private activatedrouted:ActivatedRoute, private service: MyserviceService,private formbuilder:FormBuilder ){ }
  
  
  
  ngOnInit()
  : void {
    this.form=this.formbuilder.group({
      username:['',Validators.required],
      description:['',Validators.required],
      num:['',Validators.required],
      codeproduit:['',Validators.required],
    action:['',Validators.required],
    
})
    
  }

 
handleFileInput(files: any) 

  {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }
  
 


    createproduit(){

      let formdata = new FormData()
      formdata.append("name",this.form.value.name),
      formdata.append("price",this.form.value.price),
      formdata.append("description",this.form.value.description),
      
      formdata.append("file",this.form.value.file),
      this.service.updateProduit(this.id,formdata,this.form.value.idcat).subscribe(
        (res)=>{ 
      console.log("succes to create:")}, 
      
      
        (error)=>{console.log("error",error)}
      )



    }


}