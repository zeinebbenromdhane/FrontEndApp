import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  httpOptions:any
  constructor(private http:HttpClient) {}




  /**********************AUTH************************************ */

  login(cat:any)
  {
   return this.http.post(`${environment.baseUrl}/auth/signin`,cat)
  }

  logout(data:any){
  this.httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization':`Bearer` +` `+ data
      })
    }
   //console.log("****************httpheadrs**",this.httpOptions);
   return this.http.get(`${environment.baseUrl}/auth/signout`,this.httpOptions)
  }
  

  AllAdmin()
  {return this.http.get(`${environment.baseUrl}/admin/list`)}

  detailAdmin(id:String)
  {return this.http.get(`${environment.baseUrl}/admin/detail/${id}`)}

  addAdmin(data:any)
  {return this.http.post(`${environment.baseUrl}/admin/create`,data)}

  updateAdmin(id:String,data:any)
  {return this.http.patch(`${environment.baseUrl}/admin/Update/${id}`,data)}
  deleteAdmin(id:String,)
  {return this.http.delete(`${environment.baseUrl}/admin/delete/${id}`)}


  //*********************cat****************************** */
AllCategory()
  {return this.http.get(`${environment.baseUrl}/Category/list`)}
  detailCategory(id:String)
  {return this.http.get(`${environment.baseUrl}/Category/Category1/${id}`)}

  addCategory(data:any)
  {return this.http.post(`${environment.baseUrl}/Category/create`,data)}

  updateCategory(id:String,data:any)
  {return this.http.patch(`${environment.baseUrl}/Category/Update/${id}`,data)}

  deleteCategory(id:String,)
  {return this.http.delete(`${environment.baseUrl}/Category/delete/${id}`)}
  //*************************prod****************** */
  AllProduit()
  {return this.http.get(`${environment.baseUrl}/Product/list`)}
  detailProduit(id:String)
  {return this.http.get(`${environment.baseUrl}/Product/Product1/${id}`)}

  addProduit(data:any,id:string)
  {console.log(id) ;
    return this.http.post(`${environment.baseUrl}/Product/create/${id}`,data )}

  updateProduit(id:String,data:any,cat_id:String)
  {return this.http.patch(`${environment.baseUrl}/Product/update/${id}/${cat_id}`,data)}
  deleteProduit(id:String,)
  {return this.http.delete(`${environment.baseUrl}/Product/delete/${id}`)}

/**********************cli************************************ */
AllClient()
  {return this.http.get(`${environment.baseUrl}/client/list`)}

  detailClient(id:String)
  {return this.http.get(`${environment.baseUrl}/client/detail/${id}`)}

  addClient(data:any)
  {return this.http.post(`${environment.baseUrl}/client/create`,data)}

  updateClient(id:String,data:any)
  {return this.http.patch(`${environment.baseUrl}/client/update/${id}`,data)}
  deleteclient(id:String,)
  {return this.http.delete(`${environment.baseUrl}/client/delete/${id}`)}

  commander(id:String)
  {return this.http.get(`${environment.baseUrl}/client/detail/${id}`)}

  
}
