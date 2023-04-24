import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { ClientService } from '../client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    constructor(private clientService: ClientService) { }

    getAll(): Observable<any> {
        return this.clientService.get('products');
    }

    getById(productId: number): Observable<any> {
        return this.clientService.get('products', productId);
    }

    search(params: HttpParams): Observable<any> {
        return this.clientService.get('products', undefined, { params });
    }

}