import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formData!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.authService.login(this.formData.value);
  }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      email: [null],
      password: [null],
    });
  }
}
