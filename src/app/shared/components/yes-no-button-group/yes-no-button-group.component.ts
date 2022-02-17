import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  // inbound properties
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>()
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => { }
  public onTouched = () => { }
  constructor() { }

  // Control Value Acessor Methods
  public writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  public activate(value: string): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }

}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
