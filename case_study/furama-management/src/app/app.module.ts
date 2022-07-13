import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import {HttpClientModule} from "@angular/common/http";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {ReactiveFormsModule} from "@angular/forms";
import { CustomerDeleteComponent } from './component/customer/customer-delete/customer-delete.component';
import { CustomerEditComponent } from './component/customer/customer-edit/customer-edit.component';
import { CustomerSearchComponent } from './component/customer/customer-search/customer-search.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerDeleteComponent,
    CustomerEditComponent,
    CustomerSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
