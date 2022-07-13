import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../../model/customer-type";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../../model/customer";
import {CustomerService} from "../../../service/customer.service";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypes: CustomerType[] = [];

  createForm: FormGroup;

  customer: Customer;

  constructor(private customerTypeService: CustomerTypeService,
              private customerService : CustomerService) {
    this.createForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      idCard: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      customerType: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    })
  }

  add(){
    this.customerService.add(this.customer).subscribe(()=>{
        this.createForm.reset();
        alert('Tạo thành công')
    },error => {
      console.log(error)
    })
  }
  onSubmit() {
    console.log(this.createForm.value)
    this.customer = this.createForm.value;
    this.add();
  }
}
