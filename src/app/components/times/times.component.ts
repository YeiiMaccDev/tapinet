import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-times',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './times.component.html',
  styleUrl: './times.component.css'
})
export class TimesComponent {

  userConnection: any;
  errorMessage: string | null = null;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.appService.getUserLatestConnection(token).subscribe({
        next: (response) => {
          if (response && response.userConnections.length > 0) {
            this.userConnection = response.userConnections[0]; // Obtener el primer elemento
          }
        },
        error: (error) => {
          this.errorMessage = 'Error al obtener la conexión del usuario.';
        }
      });
    } else {
      this.errorMessage = 'No se encontró un token válido.';
    }
  }

  redirectToGoogle(): void {
    window.location.href = 'https://www.google.com';
  }
}
  
