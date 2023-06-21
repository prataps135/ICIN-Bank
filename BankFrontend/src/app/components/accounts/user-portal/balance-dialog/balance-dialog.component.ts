
import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-balance-dialog',
  templateUrl: './balance-dialog.component.html',
  styleUrls: ['./balance-dialog.component.css']
})
export class BalanceDialogComponent {
  constructor(
    public dailogRef:MatDialogRef<BalanceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ){ }

  close(){
    this.dailogRef.close();
  }
}
