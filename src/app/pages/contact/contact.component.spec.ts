import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dominicoder } from 'src/app/models/dominicoder';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule],
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create instance', () => {
    expect(component).toBeTruthy();
  });

  it('should empty email field be invalid', () => {
    let email = component.contactForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });
  it('should email field have required error', () => {
    let errors = {};
    let email = component.contactForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should policy field have required error', () => {
    let errors = {};
    let policy = component.contactForm.controls['policy'];
    errors = policy.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('A valid form should emit the Dominicode suscription', () => {
    //by default the form need to be invalid
    expect(component.contactForm.valid).toBeFalsy();
    //set values for fields in the form
    component.contactForm.controls['email'].setValue("arrecia@ahi.com");
    component.contactForm.controls['policy'].setValue(true);
    //On set values the form need to be valid
    expect(component.contactForm.valid).toBeTruthy();

    let dominicoder : Dominicoder
    // Subscribe to eventemitter and get the submitted form value
    component.onSave.subscribe((value: Dominicoder) => dominicoder = value);

    // Submit the form
    component.onSaveForm();

    // Validate the form have same values
    expect(dominicoder.email).toBe("arrecia@ahi.com");
    expect(dominicoder.policy).toBe(true);
  });

});
