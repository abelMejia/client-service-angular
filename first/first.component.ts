import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name = '';
  showFiller = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
          this.name = params.name;
          console.info('queryParams Name', this.name);
      });
  }

}
