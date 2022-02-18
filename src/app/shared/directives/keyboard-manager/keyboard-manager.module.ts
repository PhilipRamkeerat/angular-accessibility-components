import { KeyboardManagerDirective } from './keyboard-manager-directive';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [KeyboardManagerDirective],
  imports: [CommonModule],
  exports: [KeyboardManagerDirective]
})
export class KeyboardManagerModel { }
