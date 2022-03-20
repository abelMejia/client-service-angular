
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav/drawer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    @ViewChild('drawer') drawer!: MatDrawer;
    constructor() {}

    ngOnInit(): void {
        console.log('this', this);
    }

    ngAfterViewInit(): void {
        this.drawer.toggle(); 
    }

}
