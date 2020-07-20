import {Component, forwardRef, OnInit, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
};

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {
  state = 'off';

  constructor() { }

  private onChange = (value: any): void => {};

  setState(state: string): void {
    this.state = state;

    this.onChange(this.state);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(state: string): void {
    this.state = state;
  }

  setDisabledState(isDisabled: boolean): void {
  }

}
