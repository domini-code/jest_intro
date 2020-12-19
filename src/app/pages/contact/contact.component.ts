import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dominicoder } from 'src/app/models/dominicoder';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  private isEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSave: EventEmitter<Dominicoder> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSaveForm(): void {
    if (this.contactForm.valid) {
      console.log('Form-> ' + JSON.stringify(this.contactForm.value));
      this.onSave.emit(
        new Dominicoder(this.contactForm.value.email, this.contactForm.value.policy)
      );
    } else {
      this.onSave.emit(new Dominicoder('', false));
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
