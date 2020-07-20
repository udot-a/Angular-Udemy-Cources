import { Component } from '@angular/core';
import {AppCounterService} from '../services/app-counter.service';
import {LocalCountService} from '../services/local-count.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCountService]
})
export class CounterComponent {

  constructor(
      public appCounterService: AppCounterService,
      public localCountService: LocalCountService
  ) { }

}
