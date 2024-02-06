import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { BookingComponent } from './booking/booking.component';
import { ApplicationFormComponent } from './application-form/application-form.component';



const routes: Routes = [
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'jobListings', component: JobListingsComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'copyright', component: CopyrightComponent},
  {path: 'booking', component: BookingComponent},
  { path: 'jobApplicationForm/:jobId', component: ApplicationFormComponent },
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top' 
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutUsComponent, ServicesComponent, JobListingsComponent, HomeComponent, ContactUsComponent, CopyrightComponent, BookingComponent, ApplicationFormComponent]
