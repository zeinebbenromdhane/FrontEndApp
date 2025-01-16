import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber, subscribeOn } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {



  form:FormGroup
  fileToUpload: Array<File> = [];
  constructor( private service: MyserviceService,private formbuilder:FormBuilder ,private router:Router){ }
  listcategory:any
  
  
  ngOnInit()
  : void {
    this.form=this.formbuilder.group({
      name:['',Validators.required],
      price:['',Validators.required],
      disponible:['',Validators.required],  
      cat_id:['',Validators.required],
})
    
this.allcategoryFunction()

  }
  allcategoryFunction(){
    this.service.AllCategory().subscribe(
      (res)=>{ 
    console.log("la liste des category:", res); 
    this.listcategory=res},
    
      (error)=>{console.log("error",error)}
    )
      
    }
 
handleFileInput(files: any) 

  {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }
  
 


    createproduit(){
console.log(this.form.value.cat_id)
console.log(this.form.value.name)
console.log(this.form.value.price)
console.log(this.form.value.disponible)
console.log("cat_id",this.form.value.cat_id)
      let formdata = new FormData()
      formdata.append("name",this.form.value.name),
      formdata.append("price",this.form.value.price),
      formdata.append("disponible",this.form.value.disponible),
      formdata.append("file",this.fileToUpload[0]),
     
      
       
    this.service.addProduit(formdata ,this.form.value.cat_id).subscribe(
       (res)=>{console.log("succes to create produit",res);
            this.router.navigateByUrl("/produit")
          },
        (error)=>{console.log("error",error)}
      )



    }


}