import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-consumer-dialog',
  templateUrl: './consumer-dialog.component.html',
  styleUrls: ['./consumer-dialog.component.css']
})
export class ConsumerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConsumerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.dialogRef.close(this.data);
  }
}
