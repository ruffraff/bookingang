// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  //correggi sotto
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService ,private router: Router) {


  }

  onEmailChange(event: Event): void {
    const target = event.target as HTMLInputElement;  // Type assertion
    this.email = target.value;
  }
  
  onPasswordChange(event: Event): void {
    const target = event.target as HTMLInputElement;  // Type assertion
    this.password = target.value;
  }
  

  onSubmit(event: Event): void {
    // event.preventDefault();
    let emailValue = this.email;
    let passwordValue = this.password;
    this.authService.login(emailValue, passwordValue).subscribe(
      (response) => {
        localStorage.setItem('token', response.access_token);
        console.log('Login successful!');
        this.router.navigate(['/booking']);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
