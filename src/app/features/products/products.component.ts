import { Component, OnInit } from '@angular/core';
// import { PRODUCT_DATA } from 'src/app/components/const/product.data';
// import { Product } from 'src/app/components/model/product.model';

import { PRODUCT_DATA } from '../../components/const/product.data';
import { Product } from '../../components/model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = PRODUCT_DATA;
  constructor() {}

  // ngOnInit(): void {}
  ngOnInit() {
    console.log(this.products);
  }
}
