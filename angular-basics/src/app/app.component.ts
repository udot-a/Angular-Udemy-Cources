import {Component, OnInit} from '@angular/core';
import {getUniqueId} from "../helpers";

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
export class AppComponent implements OnInit{
  posts: Array<Post> = [
    {
      title: "Хочу выучить Angular Components",
      text: "Я все еще учу компоненты",
      id: getUniqueId(2)
    }
    ,
    {
      title: "Я выучил React JS",
      text: "А может и нет",
      id: getUniqueId(2)
    },
    {
      title: "Я думаю я знаю Typescript",
      text: "Наверное я ошибался",
      id: getUniqueId(2)
    }
  ];

  updatePosts = (post: Post):Array<Post> => this.posts = [post, ...this.posts];

  removePost = (id: string) => this.posts = this.posts.filter(item => item.id !== id);

  ngOnInit() {
  }
}
