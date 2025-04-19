import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) { }

  getAllUnits() {
    return this.http.get('http://localhost:4200/api/storage');
  }
}
