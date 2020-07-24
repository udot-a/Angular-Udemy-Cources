import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import { bounce, pulse } from 'ng-animate';

@Component({
  selector: 'app-animate',
  template: `
      <button (click)="visible = !visible">Toggle</button>
      <hr>
    <div class="rect" [@bounce] *ngIf="visible">
      
    </div>
  `,
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('bounce', [
        transition('void => *', useAnimation(bounce)),
        transition('* => void', useAnimation(pulse)),
    ])
  ]
})
export class AnimateComponent implements OnInit {
  visible = true;

  constructor() { }

  ngOnInit() {
  }

}
