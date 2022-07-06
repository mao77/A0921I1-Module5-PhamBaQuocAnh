import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {check} from "./check.validator";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  countries: string[] = ['USA', 'VN', 'ENG', 'RUSS']

  constructor() {
    this.createForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      country: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl('')
    });

  }

get password() {
    return this.createForm.get('password')
}
get confirmPassword() {
    return this.createForm.get('confirmPassword')
}

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createForm)
  }
}
