import {Component, OnInit, Pipe} from '@angular/core';
import {CustomerService} from "../../../service/customer/customer.service";
import {Customer} from "../../../model/customer";




@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    })
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
