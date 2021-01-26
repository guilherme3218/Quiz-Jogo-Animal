import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Animal} from '../questions/questions.component';

@Component({
  selector: 'app-add-condition',
  templateUrl: './add-condition.component.html',
  styleUrls: ['./add-condition.component.css']
})
export class AddConditionComponent implements OnInit {

  conditionName: string;

  constructor(public dialogRef: MatDialogRef<AddConditionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  continue(): void {
    this.dialogRef.close({help: true, name: this.conditionName});
  }

  notContinue(): void {
    this.dialogRef.close({help: false, name: this.conditionName});
  }


}
