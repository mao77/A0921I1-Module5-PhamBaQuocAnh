import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer.service";

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  searchForm: FormGroup;


  constructor(private customerService: CustomerService) {
    this.searchForm = new FormGroup({
      name : new FormControl(''),
      gender : new FormControl(''),
      address : new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.search();
  }

  getPage(){
    this.customerService.getPage(2,3).subscribe(any=>{
      console.log(any)
    })
  }
  search(){
    this.customerService.getByName(this.searchForm.value.name,this.searchForm.value.address).subscribe(
      customers=>{
        console.log(customers);
      }
    )
  }

}
