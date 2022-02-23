import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { UniqueIdService } from './../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ]

})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  // inbound properties
  @Input() disabled = false;
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();
  public id: string = null;
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => { }
  public onTouched = () => { }

  constructor(uniqueIdService: UniqueIdService) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
  }

  ngOnInit(): void {
  }
  // Control Value Acessor Methods
  public writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    console.log('Testing set disabled caller', isDisabled);

    this.disabled = isDisabled;
  }

  public activate(value: string): void {
    this.writeValue(value)
  }

}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
