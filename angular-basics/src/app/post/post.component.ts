import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() post: Post;

  @ContentChild("info", {static: false}) infoRef: ElementRef;

  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log("constructor")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges", changes);

  }

  ngOnInit(): void {
    console.log("OnInit")
  }

  ngDoCheck() {
    console.log("DoCheck")
  }

  ngAfterContentInit() {
    console.log("AfterContentInit")
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked")
  }

  ngAfterViewInit() {
    console.log("AfterViewInit")
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked")
  }

  ngOnDestroy() {
    console.log("OnDestroy")
  }

  removePost() {
    this.onRemove.emit(this.post.id)
  }
}
