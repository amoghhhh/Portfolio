import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isSubmitting = false;
  showAlert = false;
  alertMessage = '';
  alertType: 'success' | 'error' = 'success';

  onSubmit(contactForm: NgForm) {
    if (contactForm.invalid) {
      this.showAlertMessage('Please fill in all required fields.', 'error');
      return;
    }

    this.isSubmitting = true;
    const { name, email, message } = contactForm.value;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    // Send email to yourself
    emailjs.send('service_5xpojvn', 'template_pgmbq59', templateParams, '87P5DZxkcRgZTKCVW')
    .then(() => {
      // Send auto-reply to sender
      return emailjs.send('service_5xpojvn', 'template_h8pfiur', templateParams, '87P5DZxkcRgZTKCVW');
    })
    .then(() => {
      this.showAlertMessage('Message sent successfully! I will get back to you soon.', 'success');
      contactForm.reset();
      this.isSubmitting = false;
    }).catch((error: any) => {
      console.error('EmailJS Error:', error);
      this.showAlertMessage('Failed to send message. Please email me directly at amoghgupta2000@gmail.com', 'error');
      this.isSubmitting = false;
    });
  }

  showAlertMessage(message: string, type: 'success' | 'error') {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }

  closeAlert() {
    this.showAlert = false;
  }
}
