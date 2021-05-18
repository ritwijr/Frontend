import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { BookmarkedfreelancerComponent } from './recruiter/bookmarkedfreelancer/bookmarkedfreelancer.component';
import { FeedbackComponent } from './recruiter/feedback/feedback.component';
import { JobComponent } from './recruiter/job/job.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { AddFeedbackComponent } from './recruiter/feedback/add-feedback/add-feedback.component';
import { FindFeedbackComponent } from './recruiter/feedback/find-feedback/find-feedback.component';
import { AverageRatingsComponent } from './recruiter/feedback/average-ratings/average-ratings.component';


@NgModule({
  declarations: [BookmarkedfreelancerComponent, FeedbackComponent, JobComponent, RecruiterComponent, AddFeedbackComponent, FindFeedbackComponent, AverageRatingsComponent],
  imports: [
    CommonModule,
    RecruiterRoutingModule
  ]
})
export class RecruiterModule { }
