import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contace-me.component.html',
  styleUrls: ['./contace-me.component.scss']
})
export class ContaceMeComponent {
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      environment.emailJsServiceId,
      environment.emailJsTemplateId,
      e.target as HTMLFormElement,
      environment.emailJsPublicKey
    ).then((result: EmailJSResponseStatus) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send message. Try again later.');
    });

    (e.target as HTMLFormElement).reset();
  }
}
