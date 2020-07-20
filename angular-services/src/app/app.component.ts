import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AppCounterService} from './services/app-counter.service';
import {LocalCountService} from './services/local-count.service';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCountService]
})
export class AppComponent {
  constructor(
      public appCounterService: AppCounterService,
      public localCountService: LocalCountService
  ) {
  }
}
