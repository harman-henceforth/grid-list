import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}
  getProductsListing(): Observable<any> {
    return this.http.get(`http://localhost:4200/api/products`) as Observable<any>;
  }
}
