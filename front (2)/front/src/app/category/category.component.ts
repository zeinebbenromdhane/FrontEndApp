import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
listcategory:any
c: number = 1
role:any
admin="admin"
client="client"
constructor( private service:MyserviceService){}
ngOnInit(): void {
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
  deleteCategory (id:string)  
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteCategory(id).subscribe(
          (res:any)=>{console.log("ok");
  this.allcategoryFunction()
        },
        (error:any)=>{console.log("error is",error)}
        )
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  } 
}
