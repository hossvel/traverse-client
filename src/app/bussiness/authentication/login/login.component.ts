import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router){

  }

  login(): void {
    this.authService.login(this.user, this.password).subscribe({
      next: (response)=> {
        const token = response.token;
        const payload = JSON.parse(atob(token.split('.')[1]));
        const role = payload.role;
       this.router.navigate(['/']);
      },
      error: (err) => console.error('Login failed', err)
    })
  }
}
