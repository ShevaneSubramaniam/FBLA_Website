import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  @ViewChild('contactUs', { static: false }) contactUs!: NgForm; // Add { static: false }

    

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return; // Form will display the error message, no need for an alert
    }

    const formData = new FormData();
    formData.append('firstName', form.value.firstName);
    formData.append('lastName', form.value.lastName);
    formData.append('email', form.value.email);
    formData.append('phoneNumber', form.value.phoneNumber);
    formData.append('address', form.value.address);
    formData.append('city', form.value.city);
    formData.append('state', form.value.state);
    formData.append('zip', form.value.zip);
    formData.append('resume', form.value.resume);
    formData.append('linkedin', form.value.linkedin);
    formData.append('howDidYouHear', form.value.howDidYouHear);
    formData.append('message', form.value.message);

    this.contactUs.resetForm();

    setTimeout(() => {
      this.showSuccessPopup();
    }, 250);
  }
    // Method to display success popup
  showSuccessPopup() {
    alert('Form submitted successfully!');
  }
}
