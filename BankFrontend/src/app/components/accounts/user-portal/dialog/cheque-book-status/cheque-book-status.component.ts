import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cheque-book-status',
  templateUrl: './cheque-book-status.component.html',
  styleUrls: ['./cheque-book-status.component.css']
})
export class ChequeBookStatusComponent {
  constructor(
    public dailogRef: MatDialogRef<ChequeBookStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  close() {
    this.dailogRef.close();
  }
}
