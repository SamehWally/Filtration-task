import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../../_services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
    });
  }

  onSubmit() {
    const payload = this.contactForm.value;

    this.contactService.sendContactForm(payload).subscribe({
      next: (res) => console.log('✅ Success:', res),
      error: (err) => console.error('❌ Error:', err),
    });
  }
}
