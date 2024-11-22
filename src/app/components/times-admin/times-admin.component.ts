import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-times-admin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './times-admin.component.html',
  styleUrl: './times-admin.component.css'
})
export class TimesAdminComponent {
  connections: any[] = [];
  selectedConnection: any | null = null; // Conexión seleccionada para editar
  editForm: FormGroup;

  constructor(
    private timeConnectionService: AppService,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      temporaryTime: [null, [Validators.required, Validators.min(1)]],
      plasticCaps: [null, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token') || '';

    if (token) {
      this.timeConnectionService.getAllTimeConnections(token).subscribe({
        next: (response) => {
          this.connections = response.timeConnections;
        },
        error: (err) => {
          console.error('Error al obtener las conexiones:', err);
        }
      });
    }
  }

  // Abre el modal y llena el formulario con los datos de la conexión seleccionada
  openEditModal(connection: any): void {
    this.selectedConnection = connection;

    // Actualizar el formulario con los datos actuales de la conexión
    this.editForm.patchValue({
      temporaryTime: connection.temporaryTime,
      plasticCaps: connection.plasticCaps,
    });
  }

  // Envía los datos editados al backend
  onEditSubmit(): void {
    if (!this.selectedConnection) return;

    const { temporaryTime, plasticCaps } = this.editForm.value;
    const token = localStorage.getItem('token') || '';

    this.timeConnectionService
      .updateTimeConnection(this.selectedConnection._id, temporaryTime, plasticCaps, token)
      .subscribe({
        next: () => {
          // Actualizar los datos en la tabla
          this.selectedConnection.temporaryTime = temporaryTime;
          this.selectedConnection.plasticCaps = plasticCaps;

          // Cerrar el modal
          const modalElement = document.getElementById('editModal');
          if (modalElement) {
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal?.hide();
          }
        },
        error: (err) => {
          console.error('Error al actualizar la conexión:', err);
        }
      });
  }
}