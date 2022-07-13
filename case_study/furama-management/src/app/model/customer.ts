import {CustomerType} from "./customer-type";

export interface Customer {
  id: number,
  name: string,
  dateOfBirth: Date,
  gender: string,
  idCard: string,
  phoneNumber: string,
  email: string,
  address: string,
  customerType: CustomerType
}
