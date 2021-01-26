import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Condition} from '../questions/questions.component';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConditionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Condition) {
  }

  ngOnInit() {
  }

  contains(): void {
    this.dialogRef.close(true);
  }

  notContains(): void {
    this.dialogRef.close(false);
  }

}
