import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css'
})
export class PortalComponent {
  constructor(private router: Router) { }

  redirectToLogin(): void {
    this.router.navigate(['/login']); // Redirige a la página de login
  }

  redirectToRegister(): void {
    this.router.navigate(['/register']); // Redirige a la página de login
  }
}
