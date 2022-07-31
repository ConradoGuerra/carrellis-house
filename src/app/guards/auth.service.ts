import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuth: boolean = false;

  productsMenu = new EventEmitter<boolean>();

  constructor(private router: Router) {}
  login(user: User) {
    if (user.email === 'ligia@email.com' && user.password === '12345') {
      this.userAuth = true;
      this.productsMenu.emit(true);
      this.router.navigate(['/']);
    }
    this.userAuth = false;
  }

  userLogged() {
    return this.userAuth;
  }
}
