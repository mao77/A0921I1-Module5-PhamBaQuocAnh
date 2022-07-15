import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {CustomerDeleteComponent} from "./component/customer/customer-delete/customer-delete.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {CustomerSearchComponent} from "./component/customer/customer-search/customer-search.component";



const routes: Routes = [
  {path: 'customer/list', component: CustomerListComponent},
  {path:'customer/create',component:CustomerCreateComponent},
  {path:'customer/delete/:id',component:CustomerDeleteComponent},
  {path:'customer/edit/:id',component:CustomerEditComponent},
  {path:'customer/search',component:CustomerSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
