import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dominicoder } from 'src/app/models/dominicoder';

import { ContactComponent } from './contact.component';
// tslint:disable:no-string-literal

describe('ContactComponent', () => {
  let fixture: ContactComponent;
  let formBuilderMock: FormBuilder;

  beforeEach(async () => {
    formBuilderMock = new FormBuilder();

    fixture = new ContactComponent(
      formBuilderMock,
    );
    fixture.ngOnInit();

    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  it('should initForm', () => {
    const contactForm = {
      email: '',
      policy: ''
    };
    expect(fixture.contactForm.value).toEqual(contactForm);
  });

  it('should invalidate the form', () => {
    fixture.contactForm.controls.email.setValue('');
    fixture.contactForm.controls.policy.setValue('');
    expect(fixture.contactForm.valid).toBeFalsy();
  });

  it('should validate the form', () => {
    fixture.contactForm.controls.email.setValue('arrecia@ahi.com');
    fixture.contactForm.controls.policy.setValue(true);
    expect(fixture.contactForm.valid).toBeTruthy();
  });

  it('should contain as title DOMINICODE', () => {
    const fixtureContact = TestBed.createComponent(ContactComponent);
    fixtureContact.detectChanges();
    const compiled = fixtureContact.debugElement.nativeElement;
    expect(compiled.querySelector('legend').textContent).toContain('DOMINICODE');
  });
});

  // with Jasmine

  // describe('ContactComponent', () => {
  //   let component: ContactComponent;
  //   let fixture: ComponentFixture<ContactComponent>;

  //   beforeEach(async () => {
  //     await TestBed.configureTestingModule({
  //       declarations: [ContactComponent],
  //       imports: [ReactiveFormsModule, FormsModule],
  //     })
  //       .compileComponents();
  //   });

  //   beforeEach(() => {
  //     fixture = TestBed.createComponent(ContactComponent);
  //     component = fixture.componentInstance;
  //     component.ngOnInit();
  //     fixture.detectChanges();
  //   });

  //   it('should create instance', () => {
  //     expect(component).toBeTruthy();
  //   });

  //   it('should empty email field be invalid', () => {
  //     const email = component.contactForm.controls['email'];
  //     expect(email.valid).toBeFalsy();
  //   });

  //   it('should email field have required error', () => {
  //     let errors = {};
  //     const email = component.contactForm.controls['email'];
  //     errors = email.errors || {};
  //     expect(errors['required']).toBeTruthy();
  //   });

  //   it('should invalid email field have pattern error', () => {
  //     let errors = {};
  //     const email = component.contactForm.controls['email'];
  //     email.setValue('arrecia1ahi.');

  //     errors = email.errors || {};
  //     expect(errors['pattern']).toBeTruthy();
  //   });


  //   it('should policy field have required error', () => {
  //     let errors = {};
  //     const policy = component.contactForm.controls['policy'];
  //     errors = policy.errors || {};
  //     expect(errors['required']).toBeTruthy();
  //   });

  //   it('A valid form should emit the Dominicode subscription', () => {
  //     // by default the form need to be invalid
  //     expect(component.contactForm.valid).toBeFalsy();
  //     // set values for fields in the form
  //     component.contactForm.controls['email'].setValue('arrecia@ahi.com');
  //     component.contactForm.controls['policy'].setValue(true);
  //     // On set values the form need to be valid
  //     expect(component.contactForm.valid).toBeTruthy();

  //     let dominicoder: Dominicoder;
  //     // Subscribe to eventemitter and get the submitted form value
  //     component.onSave.subscribe((value: Dominicoder) => dominicoder = value);

  //     // Submit the form
  //     component.onSaveForm();

  //     // Validate the form have same values
  //     expect(dominicoder.email).toBe('arrecia@ahi.com');
  //     expect(dominicoder.policy).toBe(true);
  //   });

  // });
