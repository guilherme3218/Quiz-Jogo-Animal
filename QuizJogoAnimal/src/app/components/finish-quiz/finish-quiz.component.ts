import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Animal, Condition} from '../questions/questions.component';

@Component({
  selector: 'app-finish-quiz',
  templateUrl: './finish-quiz.component.html',
  styleUrls: ['./finish-quiz.component.css']
})
export class FinishQuizComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FinishQuizComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Animal) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  nextStep(): void {
    this.dialogRef.close(true);
  }
}
