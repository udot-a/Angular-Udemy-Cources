import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable({
    providedIn: 'root'
})
export class AppCounterService {
    constructor(private logService: LogService) {
    }
    counter = 0;

    increase(): void {
        this.counter++;
        this.logService.log(this.counter);
    }

    decrease(): void {
        this.counter--;
        this.logService.log(this.counter);
    }
}
