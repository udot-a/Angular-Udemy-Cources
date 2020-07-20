import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidatores} from './my.validatores';

export interface Post {
  title: string;
  text: string;
  id?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup;
  appState = 'on';

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidatores.restrictedEmails
      ],
      [MyValidatores.uniqEmail]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit(): void {
    if (this.form.valid) {
      console.log('Form submitted: ', this.form);
      this.form.reset();
    }
  }

  setCapital(): void {
    const arr = {
      ua: 'Киев',
      by: 'Минск',
      ru: 'Москва',
      fr: 'Париж',
      br: 'Лондон'
    };
    this.form.patchValue({
      address: {
        city: arr[this.form.get('address').value.country]
      }
    });
  }

  addSkill(): void {
    const control = new FormControl('', Validators.required);
    // tslint:disable-next-line:no-unused-expression
    (this.form.get('skills') as FormArray).push(control);

  }

  handleChange() {
    console.log('APP STATE is ', this.appState);
  }
}

