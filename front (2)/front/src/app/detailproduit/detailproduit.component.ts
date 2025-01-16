import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../services/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {

  detailproduit:any
  id=this.activatedrouted.snapshot.params['id']
  form:FormGroup
  fileToUpload: Array<File> = [];
  constructor( private service: MyserviceService,
    private formbuilder:FormBuilder,
    private activatedrouted:ActivatedRoute,
  private router: Router ){ }

  
  
  
  ngOnInit()
  : void {
  
this.detailproduitfun()
  }
  detailproduitfun()
  {
    this.service.detailProduit(this.id).subscribe(
      (res) => {
        console.log ("les details des produits",res);
        this.detailproduit=res;
     

      },
    
    
     (error)=>{console.log("error",error)}
    )
    }
    
    

    commander()
    {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085D6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, command it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.service.commander(this.id).subscribe(
            (res:any)=>{console.log("ok");
    this.router.navigateByUrl("/produit")
          },
          (error:any)=>{console.log("error is",error)}
          )
          Swal.fire(
            'Accepted!',
            'Your request has been accepted.',
            'success'
          )
        }
      })
    }
    
    
    
    }
    