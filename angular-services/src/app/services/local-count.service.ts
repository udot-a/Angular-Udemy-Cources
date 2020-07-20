import { Injectable } from '@angular/core';

@Injectable()
export class LocalCountService {
  counter = 0;

  increase(): void {
    this.counter++;
  }

  decrease(): void {
    this.counter--;
  }

  constructor() { }
}
