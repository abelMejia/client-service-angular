import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { ClientService } from '../client.service';
import { Product } from '../../interfaces/products/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    constructor(private clientService: ClientService) { }

    getAll(): Observable<Product[]> {
        return this.clientService.get('products');
    }

    getById(productId: number): Observable<Product> {
        return this.clientService.get('products', productId);
    }

    search(params: HttpParams): Observable<Product[]> {
        return this.clientService.get('products', undefined, { params });
    }

}