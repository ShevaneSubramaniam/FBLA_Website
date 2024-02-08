import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit {

  locationFilter: string = '';
  jobTitleFilter: string = '';
  jobs: Job[] = []; // Use the Job interface


  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    // Sample job listings, replace with actual data ####### MAKE SURE IDS ARE DIFFERENT #########
    this.jobs = [
      {
        id: 322,
        title: 'Hotel Manager',
        location: 'New York',
        salary: '$70,000 - $90,000',
        description: 'A hotel manager oversees all operations of a hotel, including hiring and training staff, setting standards for guest services, handling complex tasks and conflicts and establishing and enforcing policies. They also collaborate with other administrators to manage budgets, purchasing, vendor relationships, inventory and sales..',
        qualifications: 'Bachelor\'s degree in Hospitality Management or related field preferred.',
        visible: true
      },
      {
        id: 223,
        title: 'Assistant hotel manager',
        location: 'San Francisco',
        salary: '$80,000 - $100,000',
        description: 'An assistant hotel manager supports the hotel manager by completing administrative duties, training new staff, managing correspondence, delegating tasks and supervising staff while the hotel manager is unavailable.',
        qualifications: 'Bachelor\'s degree in Hospitality Management or related field preferred.',
        visible: true
      },
      {
        id: 455,
        title: 'Director of sales and marketing',
        location: 'Boston',
        salary: '$120,000 - $180,000',
        description: 'A director of sales and marketing is responsible for setting advertising, marketing and sales goals for the hotel. They also oversee marketing teams in creating ads and promotional materials, create and manage a marketing budget and collaborate with the hotel manager to ensure the hotel&#39;s profitability..',
        qualifications: 'Bachelor\'s degree in Hospitality Management or related field preferred.',
        visible: true
      },
      {
        id: 777,
        title: 'Room attendant',
        location: 'Los Angeles',
        salary: '$60,000 - $80,000',
        description: 'A room attendant is responsible for keeping guest rooms clean and stocked with amenities. They may also assist housekeepers in replacing linens and towels and preparing rooms before guests check in..',
        qualifications: 'High School diploma or GED equivalent.',
        visible: true
      },
      {
        id: 734,
        title: 'Parking attendant/Valet',
        location: 'Atlanta',
        salary: '$60,000 - $80,000',
        description: 'A parking attendant supervises a hotel parking lot or garage, ensuring security, charging guests for parking and keeping the lot or garage clean.',
        qualifications: 'High school diploma.',
        visible: true
      },
      {
        id: 633,
        title: 'Data Analyst',
        location: 'Los Angeles',
        salary: '$60,000 - $80,000',
        description: 'Turn data into actionable insights and drive business decision-making.',
        qualifications: 'Bachelor\'s degree in Statistics, experience with data analysis tools.',
        visible: true
      },
      {
        id: 733,
        title: 'Data Analyst',
        location: 'Los Angeles',
        salary: '$60,000 - $80,000',
        description: 'Turn data into actionable insights and drive business decision-making.',
        qualifications: 'Bachelor\'s degree in Statistics, experience with data analysis tools.',
        visible: true
      },
      {
        id: 931,
        title: 'Data Analyst',
        location: 'Los Angeles',
        salary: '$60,000 - $80,000',
        description: 'Turn data into actionable insights and drive business decision-making.',
        qualifications: 'Bachelor\'s degree in Statistics, experience with data analysis tools.',
        visible: true
      },
      {
        id: 633,
        title: 'Data Analyst',
        location: 'Los Angeles',
        salary: '$60,000 - $80,000',
        description: 'Turn data into actionable insights and drive business decision-making.',
        qualifications: 'Bachelor\'s degree in Statistics, experience with data analysis tools.',
        visible: true
      },
      // Add more job listings as needed
    ];
  }

  filterJobs(): void {
    const locationFilter = this.locationFilter.toUpperCase();
    const jobTitleFilter = this.jobTitleFilter.toUpperCase();

    for (let i = 0; i < this.jobs.length; i++) {
      const location = this.jobs[i].location.toUpperCase();
      const jobTitle = this.jobs[i].title.toUpperCase();

      this.jobs[i].visible = (locationFilter === "" || location === locationFilter) &&
                             (jobTitle.includes(jobTitleFilter));
    }
  }

  selectJob(jobId: number): void {
    // Find the job with the given ID
    const selectedJob = this.jobs.find(job => job.id === jobId);
  
    // Do something with the selected job object, such as passing it to a service
    if (selectedJob) {
      this.jobService.setJobObject(selectedJob);
    }
  }


  get filteredJobs(): { id: number, title: string, location: string, salary: string, description: string, qualifications: string, visible: boolean }[] {
    return this.jobs;
  }
}