import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

interface ValidObject {
    [key: string]: boolean;
}
export class MyValidatores {
    static restrictedEmails(control: FormControl): ValidObject {
        if (['@yandex.ru', '@rambler.ru', '@mail.ru'].some(item => control.value?.includes(item))) {
            return {
                ['restrictedEmail']: true
            };
        }
        return;
    }

    static uniqEmail(control: FormControl): Promise<ValidObject> | Observable<ValidObject> {
        return new Promise(resolve => {
            setTimeout(() => {
                if (control.value === 'async@ukr.net') {
                    resolve({uniqEmail: true});
                } else {
                    resolve(null);
                }
            }, 5000);
        });
    }
}

