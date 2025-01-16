import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.css']
})
export class DetailclientComponent implements OnInit{
  detailclient:any
  form:FormGroup
  id=this.activatedrouted.snapshot.params['id']
  constructor( private service:MyserviceService,
    private activatedrouted:ActivatedRoute, private formbuilder:FormBuilder
    
    ){}

  ngOnInit(): void {

    this.form=this.formbuilder.group({
      username:['',Validators.required],
      email:['',Validators.required],
      num:['',Validators.required],

    action:['',Validators.required],
    
})
    this.detailclient()
  } 



  oneclientfunction(){

    this.service.detailClient(this.id).subscribe(
      (res)=>{ 
    console.log("la details des client:", res); 
    this.detailclient=res},
  (error)=>{console.log("error",error)}
  )
    }
}

