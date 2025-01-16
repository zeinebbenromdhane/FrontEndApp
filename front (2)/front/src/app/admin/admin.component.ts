import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
listadmin:any
c: number = 1 

  constructor( private service:MyserviceService){}

  ngOnInit(): void {
    this.AlladminFunction()
  }

  AlladminFunction(){
this.service.AllAdmin().subscribe(
  (res)=>{ 
console.log("la liste des admins:", res); 
this.listadmin=res},

  (error)=>{console.log("error",error)}
)
  }


  deleteAdmin(id:String)
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
        this.service.deleteAdmin(id).subscribe(
          (res:any)=>{console.log("ok");
  this.AlladminFunction()
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
