import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.css']
})
export class CongratsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CongratsComponent>) {
  }

  ngOnInit() {
  }

  nextStep(): void {
    this.dialogRef.close();
  }
}
