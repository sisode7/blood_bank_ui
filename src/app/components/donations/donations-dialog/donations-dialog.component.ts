import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donations-dialog',
  templateUrl: './donations-dialog.component.html',
  styleUrls: ['./donations-dialog.component.css']
})
export class DonationsDialogComponent {
  constructor(
      public dialogRef: MatDialogRef<DonationsDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
  
    onCancel(): void {
      this.dialogRef.close();
    }
  
    onAdd(): void {
      this.dialogRef.close(this.data);
    }
}
