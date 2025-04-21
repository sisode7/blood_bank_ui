import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestDialogComponent } from './request-dialog/request-dialog.component';

@Component({
  selector: 'app-blood-requests',
  templateUrl: './blood-requests.component.html',
  styleUrls: ['./blood-requests.component.css']
})
export class BloodRequestsComponent {
  displayedColumns: string[] = ['bloodGroup', 'consumerName', 'type', 'units', 'actions'];

  dataSource = [
    { bloodGroup: 'A+', consumerName: 'John Doe', type: 'Pending', units: 2 },
    { bloodGroup: 'B-', consumerName: 'Jane Smith', type: 'Completed', units: 1 }
  ];

  constructor(private dialog: MatDialog) {}

  addRequest(): void {
    const dialogRef = this.dialog.open(RequestDialogComponent, {
      width: '400px',
      data: { mode: 'add' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.push(result);
        this.dataSource = [...this.dataSource];
      }
    });
  }

  editRequest(request: any) {
    const dialogRef = this.dialog.open(RequestDialogComponent, {
      width: '300px',
      data: { ...request } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.indexOf(request);
        if (index !== -1) {
          this.dataSource[index] = result;
          this.dataSource = [...this.dataSource]; 
        }
      }
    });
  }


  deleteRequest(request: any): void {
    const confirmDelete = confirm('Are you sure you want to delete this request?');
    if (confirmDelete) {
      this.dataSource = this.dataSource.filter(r => r !== request);
    }
  }
}
