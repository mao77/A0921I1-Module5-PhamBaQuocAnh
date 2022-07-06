import {AbstractControl, ValidationErrors} from '@angular/forms';

export function check(control1: AbstractControl,control2:AbstractControl): ValidationErrors | null {
  if (control1.value == control2.value) {
    return {check:true}
  }
  return null
}
