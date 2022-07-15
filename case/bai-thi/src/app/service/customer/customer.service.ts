import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Customer} from "../../model/customer";
import {HttpClient} from "@angular/common/http";


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customer')
  }

  add(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customer', customer)
  }

  findById(id:number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customer/${id}`)
  }

  delete(id:number):Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customer/${id}`)
  }

  edit(id:number, customer : Customer):Observable<Customer>{
    return this.http.put<Customer>(`${API_URL}/customer/${id}`,customer)
  }

  getByName(name:string,address:string):Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/customer?name_like=${name}&address_like=${address}`)
  }

  getByType(customerTypeName:string):Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/customer?customerType.name_like=${customerTypeName}`)
  }

  search(name:string,address:string,customerTypeName:string):Observable<Customer[]> {
    return this.http.get<Customer[]>(
      `${API_URL}/customer?name_like=${name}&address_like=${address}&customerType.name_like=${customerTypeName}`)
  }
  paginate():Observable<any>{
  return this.http.get<any>(`${API_URL}/customer`)}
}

