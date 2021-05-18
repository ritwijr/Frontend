import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService, Feedback } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-find-feedback',
  templateUrl: './find-feedback.component.html',
  styleUrls: ['./find-feedback.component.css']
})
export class FindFeedbackComponent implements OnInit {
  id:number;
  feedback: Feedback = new Feedback;

  constructor(private route: ActivatedRoute, private router: Router, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedback = new Feedback();
    this.id = this.route.snapshot.params['id'];
    this.feedbackService.getFeedbackForFreelancer(this.id)
    .subscribe(data => {
      console.log(data);
      this.feedback = data;
    }, err => console.log(err));

  }

}
