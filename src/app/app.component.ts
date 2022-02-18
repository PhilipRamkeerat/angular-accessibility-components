import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public yesNoAnswer: string = 'no';
  public form: FormGroup = null;
  public test: any;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: ['no']
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
