import {Component} from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viewFilter = true;
  searchStr = '';
  searchField = 'title';

  posts: Post[] = [
    {
      title: 'Pyton',
      text: 'Hello ssdjhfjf'
    },
    {
      title: 'JavaScript',
      text: 'Text was here...'
    },
    {
      title: 'Kotlin',
      text: 'Text was here...'
    },
    {
      title: 'Java simply java',
      text: 'Text was here...'
    }
  ];

  p: Promise<string> = new Promise<string>(
      resolve => setTimeout(() => resolve('Promise resolve'), 4000)
  );

  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => obs.next(new Date()), 1000);
  });

  addPost(): void {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'It is a very old framework...'
    });
  }

}
