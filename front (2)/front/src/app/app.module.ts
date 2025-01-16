import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
//import { UpdateproduitComponent } from './updateproduit/updateproduit.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { DetailadminComponent } from './detailadmin/detailadmin.component';
import { DetailclientComponent } from './detailclient/detailclient.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { DetailcategoryComponent } from './detailcategory/detailcategory.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    ProduitComponent,
    CategoryComponent,
    AddcategoryComponent,
    AddclientComponent,
    AddproduitComponent,
    AddadminComponent,
    UpdateadminComponent,
    UpdateclientComponent,
   
    UpdatecategoryComponent,
    DetailadminComponent,
    DetailclientComponent,
    DetailproduitComponent,
    DetailcategoryComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    UpdateproduitComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    //ReactiveFormsModuleFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
