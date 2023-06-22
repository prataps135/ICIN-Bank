import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deposite-dialog',
  templateUrl: './deposite-dialog.component.html',
  styleUrls: ['./deposite-dialog.component.css']
})
export class DepositeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DepositeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  close() {
    this.dialogRef.close();
  }
}
