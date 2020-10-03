import { Injectable } from '@angular/core';

import { Http Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private _http;
  constructor(Http)
  {
    _http : Http
  }
}
