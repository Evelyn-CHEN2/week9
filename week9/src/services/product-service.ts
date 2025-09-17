import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private server = 'http://localhost:3000';

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.server + '/products')
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.server + '/addproduct', {product})
  }
}
