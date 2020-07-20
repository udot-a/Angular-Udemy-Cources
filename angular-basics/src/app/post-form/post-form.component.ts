import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";
import {getUniqueId} from "../../helpers";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild("titleInput", {static: false}) inputRef: ElementRef

  title = "";
  text = "";

  constructor() { }

  ngOnInit() {
  }

  addPost(): void {
    const {title, text} = this;

    if (text.trim() && title.trim()) {
      const post: Post ={title, text, id: getUniqueId(2)}

      this.onAdd.emit(post);
    }
    this.title = this.text = "";
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }

}
