import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer/customer.service";
import {CustomerType} from "../../../model/customer-type";
import {Customer} from "../../../model/customer";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  searchForm: FormGroup;
  customerTypes: CustomerType[] = [];
  customers: Customer[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
      gender: new FormControl(''),
      address: new FormControl(''),
      customerTypeName: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  onSubmit() {
    this.search();
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    })
  }

  search() {
    this.customerService.search(this.searchForm.value.name,
      this.searchForm.value.address,
      this.searchForm.value.customerTypeName).subscribe(
      customers => {
        this.customers = customers;
      }
    )
  }
  id: number;
  name: string;

  sendIdDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  deleteCustomer() {
    this.customerService.delete(this.id).subscribe(next => {
      this.customers = this.customers.filter(each => each.id != this.id);
    })
  }

}
