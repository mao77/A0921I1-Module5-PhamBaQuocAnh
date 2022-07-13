import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Route} from "@angular/router";
import {CustomerService} from "../../../service/customer.service";
import {Customer} from "../../../model/customer";
import {CustomerType} from "../../../model/customer-type";


@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  id: number;
  customer: Customer = new class implements Customer {
    address: string;
    customerType: CustomerType;
    dateOfBirth: Date;
    email: string;
    gender: string;
    id: number;
    idCard: string;
    name: string;
    phoneNumber: string;
  };

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(paramMap.get('id'));
      this.delete(this.id);
    })
  }

  ngOnInit(): void {
  }

  findById(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customer = customer;
    })
  }

  delete(id:number) {
    return this.customerService.delete(id).subscribe(i=>{
      console.log(i)
    });
  }
}
