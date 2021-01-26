import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  animalName: string;

  constructor(public dialogRef: MatDialogRef<AddAnimalComponent>) {
  }

  ngOnInit() {
  }

  continue(): void {
    this.dialogRef.close({help: true, name: this.animalName});
  }

  notContinue(): void {
    this.dialogRef.close({help: false, name: this.animalName});
  }

}
