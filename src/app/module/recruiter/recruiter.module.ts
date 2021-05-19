import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { BookmarkedfreelancerComponent } from './recruiter/bookmarkedfreelancer/bookmarkedfreelancer.component';
import { FeedbackComponent } from './recruiter/feedback/feedback.component';
import { JobComponent } from './recruiter/job/job.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
<<<<<<< HEAD
import { AddFeedbackComponent } from './recruiter/feedback/add-feedback/add-feedback.component';
import { FindFeedbackComponent } from './recruiter/feedback/find-feedback/find-feedback.component';
import { AverageRatingsComponent } from './recruiter/feedback/average-ratings/average-ratings.component';


@NgModule({
  declarations: [BookmarkedfreelancerComponent, FeedbackComponent, JobComponent, RecruiterComponent, AddFeedbackComponent, FindFeedbackComponent, AverageRatingsComponent],
=======
import { ListbookmarksComponent } from './recruiter/bookmarkedfreelancer/listbookmarks/listbookmarks.component';
import { ListfreelancersComponent } from './recruiter/bookmarkedfreelancer/listfreelancers/listfreelancers.component';


@NgModule({
  declarations: [BookmarkedfreelancerComponent, FeedbackComponent, JobComponent, RecruiterComponent, ListbookmarksComponent, ListfreelancersComponent],
>>>>>>> c90e2c54a4423e6d38ffd2d2b7799fb3c4cf989c
  imports: [
    CommonModule,
    RecruiterRoutingModule
  ]
})
export class RecruiterModule { }
