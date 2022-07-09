import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {TranslateComponent} from "./translate/translate.component";


const routes: Routes = [
  {
    path:'list',component:ListComponent
  },
  {
    path:'translate/:id',component:TranslateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
