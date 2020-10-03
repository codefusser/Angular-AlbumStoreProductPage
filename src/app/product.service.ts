import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import rxjs/add/operator/map;

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private _http: Http;
  private _albumUrl: string;

  constructor(){
    this._albumUrl = '../assets/album.json';
  }

  function getAlbum(id:number)
  {
    result  = this._http.get(_albumUrl);
    return result;
  }
}
