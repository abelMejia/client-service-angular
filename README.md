# Settings
1. Go to the `src/environments/environment.ts` 
2. Set apiEndpoint and serverBaseUrl variables.
```
  export const environment = {
      ....
      apiEndpoint: '',
      serverBaseUrl: 'https://dummyjson.com/',
  };
```

# Usage
1. Insert the below code in your `component class`
- Initialize product$ and productSearch$ Observables.
```
    products$!: Observable<Product[]>;
    productSearch$!: Observable<Product[]>;
```
-  Assignments
```
    this.products$ = this.productService.getAll().pipe(map(it => it?.products.slice(0, 5) ));

    let httpParams = new HttpParams();
    httpParams = httpParams.append('q', 'laptop');
    
    this.productSearch$ = this.productService.search(httpParams).pipe(map(it => it?.products.slice(0, 5) ));
```

2. Insert the below code in your `component's template`
```
    <div class"mat-list">
        <div class="mat-subheader">Products</div>
        <div class="mat-list-item" *ngFor="let product of (products$ | async)">
            <div  class="matListItemTitle">{{product?.title}}</div>
            <div class="matListItemLine">{{product.category}}</div>
        </div>
    </div>

    <hr>
    <div class="mat-list">
        <div class="mat-subheader">Products Encontrados</div>
        <div class="mat-list-item" *ngFor="let product of (productSearch$ | async)">
            <div class="matListItemTitle">{{product?.title}}</div>
            <div class="matListItemLine">{{product.category}}</div>
        </div>
    </div>
```

3. Module 
- import the HttpClientModule from @angular/common/http,
```
import { HttpClientModule } from '@angular/common/http';
```
- add it to the @NgModule.imports array.
```
imports:[HttpClientModule,  ]
```
