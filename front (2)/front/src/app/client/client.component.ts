import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  Listclient:any
  c: number = 1
  constructor( private service:MyserviceService){}

  ngOnInit(): void {
    this.AllclientFunction()
  }

  AllclientFunction(){
this.service.AllClient().subscribe(
  (res)=>{ 
console.log("la liste des client:", res); 
this.Listclient=res},

  (error)=>{console.log("error",error)}
)
  }
  deleteClient (id:string)  
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
        this.service.deleteclient(id).subscribe(
          (res:any)=>{console.log("ok");
  this.AllclientFunction()
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









