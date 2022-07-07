import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.min(19)]),
      gender: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.pattern(' /^\\+84\\d{9,10}$/')])
    }, this.check
  );
  countries: string[] = ['USA', 'VN', 'ENG', 'RUSS']

  check(check: AbstractControl): ValidationErrors | null {
    if (check.value.password != check.value.confirmPassword) {
      return {"check": true}
    }
    return null;
  }

  constructor() {
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
