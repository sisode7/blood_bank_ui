import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsumerDialogComponent } from './consumer-dialog/consumer-dialog.component';
import { ConsumerService } from 'src/app/services/consumer.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit{

  displayedColumns: string[] = ['name', 'address', 'bloodGroup','aadharId', 'actions'];
  dataSource:any[] = [];
  bloodGroups:any[] = [];

  constructor(private dialog: MatDialog, private consumerService: ConsumerService,private router:Router) {}

  ngOnInit(){
    this.getAllConsumers();

  }


  getAllConsumers() {
    this.consumerService.getAllConsumers().subscribe((res:any)=>{
      if(res) {
        this.dataSource = res;
      } else {
        alert('No data found')
      }
    });
  }





  addConsumer() {
    const dialogRef = this.dialog.open(ConsumerDialogComponent, {
      width: '300px',
      data: { name: '', address: '', aadharId:'', bloodGroup: '' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.push(result);
        this.dataSource = [...this.dataSource]; // Refresh table
        this.router.navigateByUrl('/dashboard/consumers')

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

    let text = "Are you sure to delete the consumer?";
    if (confirm(text) == true) {
      this.consumerService.deleteConsumer(consumer).subscribe(res=>{
        if(res) {
          alert("Consumer deleted successfully..");
        }
      })
      this.dataSource = this.dataSource.filter(c => c !== consumer);
    } 
    // Remove the consumer from dataSource
  }
}
