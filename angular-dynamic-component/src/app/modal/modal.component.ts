import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title = "Default title";
  @Output() close = new EventEmitter<void>();

  @ViewChild("myDiv", {static: false}) divView: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  outOfModalClick($event: MouseEvent) {
    if ($event.currentTarget !== this.divView.nativeElement) {
      this.close.emit();
      console.log("I am here...")
    }
  }
}
