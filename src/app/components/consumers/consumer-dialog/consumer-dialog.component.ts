import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-consumer-dialog',
  templateUrl: './consumer-dialog.component.html',
  styleUrls: ['./consumer-dialog.component.css']
})
export class ConsumerDialogComponent implements OnInit {
  consumerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,private consumerService: ConsumerService,private router:Router,
    public dialogRef: MatDialogRef<ConsumerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(){
    this.consumerForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      address: ["", [Validators.required]],
      aadharId: ["", [Validators.required]],
      bloodGroup: ["", [Validators.required]]
    });

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.consumerService.addConsumer(this.data).subscribe((res:any)=>{
      if(res) {
        this.dialogRef.close(this.data);
      } else {
        alert('Invalid creds or request failed')
      }
    });
  }
}
