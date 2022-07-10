import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  products : Product[];

  getAll() {
    this.products = this.productService.getAll();
  }
}
