import { Injectable } from '@angular/core';
import { User } from '../interfaces/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser: User | null = null;

  getAuthedUser(): User | null {
    return this.currentUser;
  }

  login(user: User): void {
    this.currentUser = user;
  }

  logout(): void {
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
