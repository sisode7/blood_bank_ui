import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonationsDialogComponent } from './donations-dialog/donations-dialog.component';
import { Router } from '@angular/router';
import { BloodRequestService } from 'src/app/services/blood-request.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent {

  displayedColumns: string[] = ['bloodGroup', 'consumerName', 'requestType', 'units', 'actions'];

  dataSource:any[] = [];
   consumerList:any[] = [];
 
   constructor(private dialog: MatDialog,private donationService:DonationService,private consumerService:ConsumerService,private router:Router) {}
   ngOnInit(): void {
     this.getAllBloodRequests();
     this.getConsumerList();
   }
 
   getAllBloodRequests(){
     this.donationService.getAllDoantions().subscribe((res:any)=>{
       if(res) {
         this.dataSource = res;
       } else {
         alert('No data found')
       }
     });
   }
 
   getConsumerList(){
     this.consumerService.getAllConsumers().subscribe((res:any)=>{
       if(res) {
         this.consumerList = res;
       } else {
         alert('No data found')
       }
     });
   }
 
 
   addDonation(): void {
     const dialogRef = this.dialog.open(DonationsDialogComponent, {
       width: '400px',
       data: { mode: 'add',consumerList:this.consumerList }
     });
 
     dialogRef.afterClosed().subscribe(result => {
       if (result) {
         this.dataSource.push(result);
         this.dataSource = [...this.dataSource]; // Refresh table
         this.router.navigateByUrl('/dashboard/donations')
       }
     });
   }
 
   deleteDonation(request: any): void {
     let text = "Are you sure you want to delete this request?";
     if (confirm(text) == true) {
       this.donationService.deleteRequest(request).subscribe(res=>{
         if(res) {
           alert("Request deleted successfully..");
         }
       })
       this.dataSource = this.dataSource.filter(c => c !== request);
     } 
   }
}
