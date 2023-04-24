<<<<<<< HEAD
# FirstPartyLibraries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
=======
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
>>>>>>> 21eca9f (service config)
