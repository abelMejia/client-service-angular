import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, startWith } from 'rxjs';
import { Product } from './product.interface';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'myApp';
    constructor(private productService: ProductService) {}

    products$!: Observable<Product[]>;
    currentProducts$!: Observable<Product>;
    productSearch$!: Observable<Product[]>;

    ngOnInit(): void {
        this.products$ = this.productService.getAll().pipe(map(it => it?.products.slice(0, 5) ));
        this.currentProducts$ = this.productService.getById(1);

        let httpParams = new HttpParams();
        httpParams = httpParams.append('q', 'laptop');
        
        this.productSearch$ = this.productService.search(httpParams).pipe(map(it => it?.products.slice(0, 5) ));
  
    }

}
