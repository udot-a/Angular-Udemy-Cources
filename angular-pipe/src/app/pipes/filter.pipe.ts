import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], searchStr: string = '', field: string): Post[] {
    if (!searchStr.trim()) {
      return posts;
    }
    return posts.filter(item => item[field].toUpperCase().includes(searchStr.toUpperCase()));
  }

}
