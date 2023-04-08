import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../home/home.component';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent implements OnInit {
  @Input() user?: User | undefined | null;
  @Output() subscribe = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  subscribeToNewsletter(email:string) {
      this.subscribe.emit(email);
  }

}
