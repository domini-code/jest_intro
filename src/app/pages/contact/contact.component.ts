import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  private isEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSaveForm(): void {
    if (this.contactForm.valid) {
      console.log('Form-> ' + JSON.stringify(this.contactForm.value));
      alert('Form saved!!');
    } else {
      alert('Not valid');
    }
    this.contactForm.reset();
  }

  isValidField(name: string): boolean {
    return (
      (this.contactForm.get(name).touched ||
        this.contactForm.get(name).dirty) &&
      !this.contactForm.get(name).valid
    );
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      policy: ['', Validators.required],
    });
  }

}
