import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private _albumUrl: string;

  constructor(private _http: Http;){
    //this._http = '../assets/album.json';
    this._albumUrl = this._http;
  }

  getAlbum(id:number): string
  {
    result : string;
    result = this._http.get(_albumUrl);
    return result;
  }
}
