import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less'],
})
export class LoginPageComponent {
  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  login() {
    this.authService.login({
      id: '1',
      role: 'admin',
      fullName: 'Иван Петров',
    });
    this.router.navigate(['/projects']);
  }
}
