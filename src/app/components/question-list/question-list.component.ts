import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Question } from '../../models/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[];

  constructor(public dataService: DataService) {
    this.questions = this.dataService.getQuestion();
  }

  ngOnInit() {
  }

  addQuestion(question: Question) {
    this.dataService.addQuestion(question);
  }
}
