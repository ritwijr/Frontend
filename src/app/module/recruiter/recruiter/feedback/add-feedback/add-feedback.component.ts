import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService, Feedback } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  constructor(private feedbackService: FeedbackService, private router: Router) { }
  feedback: Feedback = new Feedback;

  ngOnInit(): void {
  }
  onSubmit(addFeedBack: Feedback): any {
    console.log(addFeedBack);
    alert("FeedBack Added Successfully");
    this.feedback.freelancerId = addFeedBack.freelancerId;
    this.feedback.recruiterId = addFeedBack.recruiterId;
    this.feedback.ranges = addFeedBack.ranges;
    this.feedback.comments = addFeedBack.comments;
    this.feedbackService.addFeedback(this.feedback)
      .subscribe(data => {
        console.log(data);
        alert(data);
      }, err => console.log(err));

}

}
