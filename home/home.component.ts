import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NewsletterService } from '../newsletter/newsletter.service';
import { UserService } from '../newsletter/user.service';
import { Product } from '../shared/interfaces/products/product.interface';
import { ProductService } from '../shared/services/products/products.service';

export interface User {
  firstName?: string;
  lastName?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = {
      firstName: 'Alice',
      lastName: 'Smith'
  };

  title = 'first-party-libraries';
  products$!: Observable<Product[]>;
  productSearch$!: Observable<Product[]>;

  constructor(
    private newsletterService: NewsletterService,
    public userService: UserService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
      this.products$ = this.productService.getAll().pipe(map(it => it?.products.slice(0, 5) ));

      let httpParams = new HttpParams();
      httpParams = httpParams.append('q', 'laptop');
      
      this.productSearch$ = this.productService.search(httpParams).pipe(map(it => it?.products.slice(0, 5) ));
  }

  subscribe(evt: any) {
      this.newsletterService.subscribe(evt);
  }

  changeUserName() {
      this.userService.loadUser({firstName: 'Bob', lastName: 'Smith' });
  }

}
