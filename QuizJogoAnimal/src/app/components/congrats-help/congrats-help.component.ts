import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-congrats-help',
  templateUrl: './congrats-help.component.html',
  styleUrls: ['./congrats-help.component.css']
})
export class CongratsHelpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CongratsHelpComponent>) {
  }

  ngOnInit() {
  }

  nextStep(): void {
    this.dialogRef.close();
  }
}
