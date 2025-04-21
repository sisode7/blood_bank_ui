import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  getAllDoantions() {
    return this.http.get('http://localhost:4200/api/bloodRequest/donations');
  }

  addDonation(request:any) {
    return this.http.post('http://localhost:4200/api/bloodRequest/save', request,{
          headers : {
              'Content-Type' : 'application/json'
          }});
  }

  deleteRequest(request:any) {
    let url = 'http://localhost:4200/api/bloodRequest/delete/'+request.requestId;
    return this.http.delete(url);
  }
}
