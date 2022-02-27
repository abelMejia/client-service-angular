import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
    {
        path: 'first', component: FirstComponent,
        canActivate: [YourGuardGuard],
        children: [
          {
              path: '',
              redirectTo: 'child-a',
              pathMatch: 'full'
          },
          {
            path: 'child-a', // child route path
            component: ChildAComponent, // child route component that the router renders
          },
          {
            path: 'child-b',
            component: ChildBComponent, // another child route component that the router renders
          }
        ]
    },
    { path: 'second', component: SecondComponent },
    {
        path: 'heroes', component: HeroesComponent,
        children: [
            { path: 'detail/:id', component: HeroDetailComponent }
        ]
    },
    // { path: '', redirectTo: 'second', pathMatch: 'full' }, // redirect to `FirstComponent`
    { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
    { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
    { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
    { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
