import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BloodRequestService } from 'src/app/services/blood-request.service';

@Component({
  selector: 'app-donations-dialog',
  templateUrl: './donations-dialog.component.html',
  styleUrls: ['./donations-dialog.component.css']
})
export class DonationsDialogComponent {
  selectedDonor!:any;

  constructor(private bloodRequestService: BloodRequestService,
      public dialogRef: MatDialogRef<DonationsDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
  
    onCancel(): void {
      this.dialogRef.close();
    }
  
    onAdd(): void {
      let selectedVals = this.selectedDonor.split(':');
      let id = selectedVals[0];
      let name = selectedVals[1];
      this.data['requestType'] = 'DONATE';
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
