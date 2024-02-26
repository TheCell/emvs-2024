import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface ContactForm {
  name: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string>;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public contactForm: FormGroup<ContactForm>;
  public lastSubmit: object = {};

  public get isFormValid(): boolean {
    return this.contactForm.valid;
  }

  constructor(formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group<ContactForm>({
      name: new FormControl('', { validators: [Validators.required, Validators.minLength(2)], nonNullable: true }),
      email: new FormControl('', { validators: [Validators.required, Validators.email], nonNullable: true }),
      message: new FormControl('', { nonNullable: true }),
    });
  }

  ngOnInit() {
  }

  public submitForm() {
    if (this.contactForm.invalid) {
      return;
    }

    this.lastSubmit = this.contactForm.value;
  }

}
