import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe(
      (response) => {
        if (response?.token) {
          // Guarda los datos en el localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('name', response.user.name);
          localStorage.setItem('role', response.user.role);
          localStorage.setItem('email', response.user.email);
        }
        // Maneja la respuesta exitosa, por ejemplo, redirigir al dashboard
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Muestra un mensaje de error si la autenticación falla
        this.errorMessage = 'Correo electrónico o contraseña incorrectos';
      }
    );
  }
}
