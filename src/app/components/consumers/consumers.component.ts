import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsumerDialogComponent } from './consumer-dialog/consumer-dialog.component';


@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent {
  constructor(private dialog: MatDialog) {}
  displayedColumns: string[] = ['name', 'address', 'bloodGroup', 'actions'];

  dataSource = [
    { name: 'John Doe', address: '123 Main St', bloodGroup: 'A+' },
    { name: 'Jane Smith', address: '456 Elm St', bloodGroup: 'B-' },
    { name: 'Mike Johnson', address: '789 Oak St', bloodGroup: 'O+' },
  ];

  addConsumer() {
    const dialogRef = this.dialog.open(ConsumerDialogComponent, {
      width: '300px',
      data: { name: '', address: '', bloodGroup: '' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.push(result);
        this.dataSource = [...this.dataSource]; // Refresh table
      }
    });
  }

  editConsumer(consumer: any) {
    const dialogRef = this.dialog.open(ConsumerDialogComponent, {
      width: '300px',
      data: { ...consumer } // Pass a copy to avoid two-way binding issues
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.indexOf(consumer);
        if (index !== -1) {
          this.dataSource[index] = result;
          this.dataSource = [...this.dataSource]; // Refresh table
        }
      }
    });
  }

  deleteConsumer(consumer: any) {
    console.log('Delete button clicked for:', consumer);
    // Remove the consumer from dataSource
    this.dataSource = this.dataSource.filter(c => c !== consumer);
  }
}
