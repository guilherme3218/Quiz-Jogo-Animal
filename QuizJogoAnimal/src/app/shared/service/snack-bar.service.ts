import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private snackBar: MatSnackBar) {
  }


  openSnackBarWithMessage(msg: string) {
    this.snackBar.open(msg, 'Entendi', {
      duration: 5 * 1000,
    });
  }
}
