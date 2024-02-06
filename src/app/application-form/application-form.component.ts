import { Component } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../job';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent {

  // Selected Job Object Instantiation
  job: Job= new Job();

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.job = this.jobService.getJobObject();
  }

}
