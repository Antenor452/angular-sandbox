import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Product } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class HttpSandboxService {
 testUrl:string = 'https://dummyjson.com/products';
  constructor(private http:HttpClient) { }

  sampleGet():Observable<HttpResponse<Record<string,any>>>{

    return this.http.get<Product>(this.testUrl,
      {
        observe:'response'
      });
  }
}
