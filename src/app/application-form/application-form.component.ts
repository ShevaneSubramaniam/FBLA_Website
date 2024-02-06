import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobService } from '../job.service';
import { Job } from '../job';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent {

  // Selected Job Object Instantiation
  job: Job = new Job();

  @ViewChild('applicationForm', { static: false }) applicationForm!: NgForm; // Add { static: false }

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.job = this.jobService.getJobObject();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return; // Form will display the error message, no need for an alert
    }

    // If all fields are filled, you can submit the form
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

    // Clear the form
    this.applicationForm.resetForm();

    setTimeout(() => {
      this.showSuccessPopup();
    }, 250);
  }

  // Method to display success popup
  showSuccessPopup() {
    alert('Application submitted successfully!');
  }
}
