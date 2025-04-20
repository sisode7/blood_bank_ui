import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

const httpOptions = {
  Headers : new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isLoggedIn: boolean = false;

  login(userDetails: { username: string; password: string }): Observable<boolean> {
    return this.http.post<any>('http://localhost:4200/api/auth/authenticate', userDetails,{
      headers : {
          'Content-Type' : 'application/json'
      }})
      .pipe(
        map(response => {
          localStorage.setItem("userDetails",response.user);
          localStorage.setItem('jwtToken',response.jwtToken);
          this.isLoggedIn = true;
          return true;
        }),
        catchError(error => {
          console.log(error);
          this.isLoggedIn = false;
          return of(false);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('jwtToken');
    this.isLoggedIn = false;
    
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}