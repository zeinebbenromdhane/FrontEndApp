import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber, subscribeOn } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export  class AddcategoryComponent implements OnInit {
  form:FormGroup
  fileToUpload: Array<File> = [];
  constructor( private service: MyserviceService,private formbuilder:FormBuilder,private router: Router ){ }
  
  
  
  ngOnInit()
  : void {
    this.form=this.formbuilder.group({
      name:['',Validators.required],
      description:['',Validators.required],   
})
    
  }

 
handleFileInput(files: any) 

  {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }
  
 


    createcategory(){

      let formdata = new FormData()
      formdata.append("name",this.form.value.name),
      formdata.append("description",this.form.value.description),
     

      this.service.addCategory(formdata).subscribe(
        (res)=>{ 
      console.log("succes to create:",res);

      this.router.navigateByUrl("/category")
    },
    (error) => {
      console.log("Error:", error);
      this.router.navigateByUrl("/category")
    }
  );
}
}
      
      
       
