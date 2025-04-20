import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

  constructor(private authService:AuthService,private router:Router) {}

  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
