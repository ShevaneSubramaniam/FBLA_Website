import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit {

  locationFilter: string = '';
  jobTitleFilter: string = '';
  jobs: {
    id: number,
    title: string,
    location: string,
    salary: string,
    description: string,
    qualifications: string,
    visible: boolean
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    // Sample job listings, replace with actual data
    this.jobs = [
      {
        id: 322,
        title: 'Web Developer',
        location: 'New York',
        salary: '$70,000 - $90,000',
        description: 'Join our dynamic web development team and contribute to innovative projects.',
        qualifications: 'Bachelor\'s degree in Computer Science, experience with HTML, CSS, and JavaScript.',
        visible: true
      },
      {
        id: 223,
        title: 'UX Designer',
        location: 'San Francisco',
        salary: '$80,000 - $100,000',
        description: 'Shape the user experience of our products with your creative design skills.',
        qualifications: 'Bachelor\'s degree in Design, proficiency in design tools like Sketch or Figma.',
        visible: true
      },
      {
        id: 455,
        title: 'Data Analyst',
        location: 'Boston',
        salary: '$60,000 - $80,000',
        description: 'Turn data into actionable insights and drive business decision-making.',
        qualifications: 'Bachelor\'s degree in Statistics, experience with data analysis tools.',
        visible: true
      },
      {
        id: 777,
        title: 'Data Analyst',
        location: 'Los Angeles',
        salary: '$60,000 - $80,000',
        description: 'Turn data into actionable insights and drive business decision-making.',
        qualifications: 'Bachelor\'s degree in Statistics, experience with data analysis tools.',
        visible: true
      },
      {
        id: 734,
        title: 'Data Analyst',
        location: 'Atlanta',
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

  get filteredJobs(): { id: number, title: string, location: string, salary: string, description: string, qualifications: string, visible: boolean }[] {
    return this.jobs;
  }
}