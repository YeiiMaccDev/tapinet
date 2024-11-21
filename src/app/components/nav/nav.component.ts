import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  query: string = '';
  tokenLogin: boolean = false;
  roleLogin: String = "";

  private _router = inject(Router);

  Onsearch(): void {
    this._router.navigate(['movies/search/', this.query]);
  }

  ngOnInit(): void {
    // Verificar si el token existe en localStorage
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token) {
      this.tokenLogin = true;
    }

    if (role) {
      this.roleLogin = role;
    }

    this.validateSesion();

  }

  logout() {
    // Eliminar el token y los datos de sesión almacenados
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('role');

    // Redirigir a la página de inicio de sesión (o portal cautivo)
    this._router.navigate(['/login']);
  }

  validateSesion() {
    if (!this.tokenLogin) {
      // Redirigir a la página de inicio de sesión (o portal cautivo)
      this._router.navigate(['/inicio']);
    }
  }



}
