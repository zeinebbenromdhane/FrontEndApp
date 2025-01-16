import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { ProduitComponent } from './produit/produit.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddclientComponent } from './addclient/addclient.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';

import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { DetailadminComponent } from './detailadmin/detailadmin.component';
import { DetailclientComponent } from './detailclient/detailclient.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { DetailcategoryComponent } from './detailcategory/detailcategory.component';
import { HomeComponent } from './home/home.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
{path:"admin",component:AdminComponent},
{path:"client",component:ClientComponent},
{path:"produit",component:ProduitComponent},
{path:"category",component:CategoryComponent},
{path:"addcategory",canActivate:[AuthGuard],component:AddcategoryComponent},
{path:"addclient",component:AddclientComponent},
{path:"addproduit",component:AddproduitComponent},
{path:"addadmin",component:AddadminComponent},
{path:"updateadmin/:id",component:UpdateadminComponent},
{path:"updateclient/:id",component:UpdateclientComponent},
{path:"updateproduit/:id",component:UpdateproduitComponent},
{path:"updatecategory/:id",component:UpdatecategoryComponent},
{path:"detailadmin/:id",component:DetailadminComponent},
{path:"detailclient/:id",component:DetailclientComponent},
{path:"detailproduit/:id",component:DetailproduitComponent},
{path:"detailcategory/:id",component:DetailcategoryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
