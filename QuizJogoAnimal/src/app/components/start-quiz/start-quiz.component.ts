import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent {

  constructor(public dialogRef: MatDialogRef<StartQuizComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  nextStep(): void {
    this.dialogRef.close(true);
  }

}
