import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

constructor(private http: HttpClient) {}

public getProducts(): Observable<Array<Product>> {
  const endpoint =
      'https://hub.dummyapis.com/products?noofRecords=5&idStarts=1001&currency=usd';
      return this.http.get<Array<Product>>(endpoint);
  }

}
