import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestDialogComponent } from './request-dialog/request-dialog.component';
import { BloodRequestService } from 'src/app/services/blood-request.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blood-requests',
  templateUrl: './blood-requests.component.html',
  styleUrls: ['./blood-requests.component.css']
})
export class BloodRequestsComponent implements OnInit{
  displayedColumns: string[] = ['bloodGroup', 'consumerName', 'requestType', 'units', 'actions'];
  dataSource:any[] = [];
  consumerList:any[] = [];

  constructor(private dialog: MatDialog,private bloodRequestService:BloodRequestService,private consumerService:ConsumerService,private router:Router) {}
  ngOnInit(): void {
    this.getAllBloodRequests();
    this.getConsumerList();
  }

  getAllBloodRequests(){
    this.bloodRequestService.getAllRequests().subscribe((res:any)=>{
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


  addRequest(): void {
    const dialogRef = this.dialog.open(RequestDialogComponent, {
      width: '400px',
      data: { mode: 'add',consumerList:this.consumerList }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.push(result);
        this.dataSource = [...this.dataSource]; // Refresh table
        this.router.navigateByUrl('/dashboard/blood-requests')
      }
    });
  }

  deleteRequest(request: any): void {
    let text = "Are you sure you want to delete this request?";
    if (confirm(text) == true) {
      this.bloodRequestService.deleteRequest(request).subscribe(res=>{
        if(res) {
          alert("Request deleted successfully..");
        }
      })
      this.dataSource = this.dataSource.filter(c => c !== request);
    } 
  }
}
