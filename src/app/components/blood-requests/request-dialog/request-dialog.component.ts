import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BloodRequestService } from 'src/app/services/blood-request.service';

@Component({
  selector: 'app-consumer-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css']
})
export class RequestDialogComponent {

  selectedConsumer!:any;

  constructor(private bloodRequestService: BloodRequestService,
    public dialogRef: MatDialogRef<RequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    let selectedVals = this.selectedConsumer.split(':');
    let id = selectedVals[0];
    let name = selectedVals[1];
    this.data['requestType'] = 'DEMAND';
    this.data['consumerId'] = id;
    this.data['consumerName'] = name;

    const requestObj = { ...this.data };
    delete requestObj['consumerList'];
    delete requestObj['mode'];
    requestObj['requestId']=null; 
    this.bloodRequestService.addRequest(requestObj).subscribe((res:any)=>{
      if(res) {
        this.dialogRef.close(this.data);
      } else {
        alert('Invalid creds or request failed')
      }
    });
  }
}