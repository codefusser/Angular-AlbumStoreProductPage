import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http;){
    this._albumUrl = this._http;
  }

  getAlbum(id:number): string
  {
    return this._http.get(_albumUrl).map(response => albumInfo = response);;
  }
}
