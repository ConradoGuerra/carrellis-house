import { Component, OnInit } from '@angular/core';
import { AuthService } from './guards/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  showMenu: boolean = false;
  title = 'carrellis-house';
  ngOnInit(): void {
    this.authService.productsMenu.subscribe((show) => (this.showMenu = show));
  }
}
