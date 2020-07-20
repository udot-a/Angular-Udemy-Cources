import {Component} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isVisible = true;
}
