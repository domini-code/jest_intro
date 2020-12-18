import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSaveForm(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Form saved!!');
    } else {
      alert('Not valid');
    }
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      email: ['', Validators.required],
      policy: ['', Validators.required],
    });
  }

}
