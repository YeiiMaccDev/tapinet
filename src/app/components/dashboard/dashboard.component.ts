import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  counting: boolean = false;
  waitingMessage: boolean = false;
  waitingMessage2: boolean = false;

  private _router = inject(Router);
  constructor(
    private authService: AppService,
    private router: Router
  ) { }

  stopCounting() {
    // this.waitingMessage = true;

    // setTimeout(() => {
    //   this.waitingMessage2 = true;
    // }, 30000);

    // setTimeout(() => {
    //   this._router.navigate(['/dashboard/times']);
    // }, 60000);

    this.waitingMessage = false; // Mensaje inicial
    this.waitingMessage2 = false; // Mensaje intermedio

    // Supongamos que `temporaryTime` y `plasticCaps` son valores que tienes configurados en el componente.
    const temporaryTime = 25; // Ejemplo de valor en segundos.
    const plasticCaps = 3; // Ejemplo de valor en tapas.

    // Recuperar token desde localStorage (u otro lugar).
    const token = localStorage.getItem('token') || '';

    if (!token) {
      console.error('No se encontró el token.'); // Manejar error
      return;
    }

    // Llamar al servicio para crear la conexión antes de iniciar los conteos
    this.authService.createTimeConnection(temporaryTime, plasticCaps, token).subscribe({
      next: (response) => {
        console.log('Conexión creada:', response);

        // Mostrar primer mensaje tras 30 segundos
        this.waitingMessage = true;
        setTimeout(() => {
          this.waitingMessage2 = true; // Mostrar segundo mensaje tras 30 segundos
        }, 30000);

        // Redirigir tras 60 segundos
        setTimeout(() => {
          this._router.navigate(['/dashboard/times']);
        }, 60000);
      },
      error: (err) => {
        console.error('Error al crear la conexión:', err);
        // Opcional: Mostrar mensaje de error en la interfaz
      }
    });
  }

  startCounting() {
    this.counting = true;
  }

}
