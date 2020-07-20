import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  log(text: number): void {
    console.log(`LOG: ${text}`);
  }
}
