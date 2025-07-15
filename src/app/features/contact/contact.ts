import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
    });
  }

  onSubmit() {
    const payload = this.contactForm.value;

    this.http
      .post('https://upskilling-egypt.com:3001/contact', payload)
      .subscribe({
        next: (res) => console.log('✅ Success:', res),
        error: (err) => console.error('❌ Error:', err),
      });
  }
}
