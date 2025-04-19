import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit{

  storages:Storage[] = [];
  constructor(private storageService: StorageService) {}
  ngOnInit(): void {
    this.getAllUnits();
  }

  getAllUnits() {
    this.storageService.getAllUnits().subscribe((res:any)=>{
      if(res) {
        this.storages = res;
      } else {
        alert('No data found')
      }
    });
  }
}
