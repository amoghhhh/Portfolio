import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']  // Fixed typo: styleUrl to styleUrls
})
export class ContactComponent {
  onSubmit(contactForm: NgForm) {
    if (contactForm.invalid) {
      alert('Please fill in all required fields.');
      return;
    }

    const { name, email, message } = contactForm.value;

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send('service_n42dg7a', 'template_pgmbq59', templateParams, '87P5DZxkcRgZTKCVW')
      .then((response: EmailJSResponseStatus) => {
        alert('Message sent successfully!');
        contactForm.reset();  // Reset the form after submission
      }, (error) => {
        alert('There was an error sending the message. Please try again later.');
      });
  }
}
