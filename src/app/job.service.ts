import { Injectable } from '@angular/core';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})


export class JobService {

  // Initialize new Job Object
  job: Job= new Job();

  constructor() { }

  // Getters and Setters
  public setJobObject(selectedJob : Job){
    this.job = selectedJob; 
  }
  public getJobObject(){
    return this.job;
  }


}
