import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsumerDialogComponent } from './consumer-dialog/consumer-dialog.component';
import { ConsumerService } from 'src/app/services/consumer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit{

  displayedColumns: string[] = ['name', 'address', 'bloodGroup','aadharId', 'actions'];
  //dataSource:[] = []

  constructor(private dialog: MatDialog, private consumerService: ConsumerService,private router:Router) {}

  ngOnInit(){
    this.getAllConsumers();
  }

  dataSource = [
    { name: 'John Doe', address: '123 Main St', aadharId: '2342342', bloodGroup: 'A+' },
    { name: 'Jane Smith', address: '456 Elm St',aadharId: '2342342', bloodGroup: 'B-' },
    { name: 'Mike Johnson', address: '789 Oak St',aadharId: '2342342', bloodGroup: 'O+' },
  ];

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
      data: { name: '', address: '', bloodGroup: '' }
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
    // Remove the consumer from dataSource
    this.dataSource = this.dataSource.filter(c => c !== consumer);
  }
}
