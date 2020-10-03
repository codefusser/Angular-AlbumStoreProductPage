import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;
  private _productService: ProductService;

  constructor(_productService: ProductService) {
      this._productService = _productService;
  }

  ngOnInit(): void {
    return this._http.get(_albumUrl).map(response => albumInfo = response);
    }
}
