import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { MatFormField,MatError,MatLabel } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    submitted: boolean = false;
    hide: boolean = false;
    logiObj: any;
    constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient,private authService:AuthService) {}
    ngOnInit(){
      this.loginForm = this.formBuilder.group({
        email: ["", [Validators.email, Validators.required]],
        password: [
          "",
          [
            Validators.required,
          ]
        ]
      });
    }


    onLogin(): void {
      // console.log(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm && this.loginForm.valid) {
       this.logiObj = {
          "username" :this.loginForm.controls['email'].value,
          "password" :this.loginForm.controls['password'].value
       }

       this.authService.login(this.logiObj).subscribe((res:any)=>{
        if(res) {
          this.router.navigateByUrl('dashboard')
        } else {
          alert('Invalid creds or request failed')
        }
      })
    }
  }
} 
