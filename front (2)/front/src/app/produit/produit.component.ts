import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent   implements OnInit{
  listproduit:any
  role:any
  admin="admin"
client="client"
    constructor( private service:MyserviceService){}
  
    ngOnInit(): void {
      this.role=localStorage.getItem ("role")
      this.AllproduitFunction()
    }
  
    AllproduitFunction(){
  this.service.AllProduit().subscribe(
    (res)=>{ 
  console.log("la liste des produits:", res); 
  this.listproduit=res},
  
    (error)=>{console.log("error",error)}
  )
    }
    deleteProduct (id:string)
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
    this.AllproduitFunction()
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
  


