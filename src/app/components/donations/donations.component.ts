import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonationsDialogComponent } from './donations-dialog/donations-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent {

  displayedColumns: string[] = ['bloodGroup', 'consumerName', 'type', 'units', 'actions'];

  dataSource = [
    { bloodGroup: 'A+', consumerName: 'John Doe', type: 'Pending', units: 2 },
    { bloodGroup: 'B-', consumerName: 'Jane Smith', type: 'Completed', units: 1 }
  ];

  addDonation() {}

  deleteDonation() {}

}
