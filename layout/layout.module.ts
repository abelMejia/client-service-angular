import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
      LayoutComponent
  ],
  imports: [
      CommonModule,
      LayoutRoutingModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatToolbarModule
  ]
})
export class LayoutModule { }
