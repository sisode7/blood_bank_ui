import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: HttpClient) { }
  
    getAllConsumers() {
      return this.http.get('http://localhost:4200/api/consumer/all');
    }

    addConsumer(consumer:any) {
      return this.http.post('http://localhost:4200/api/consumer/save', consumer,{
            headers : {
                'Content-Type' : 'application/json'
            }});
    }
}
