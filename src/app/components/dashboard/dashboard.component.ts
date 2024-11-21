import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

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

  stopCounting() {
    this.waitingMessage = true;

    setTimeout(() => {
      this.waitingMessage2 = true;
    }, 30000);

    setTimeout(() => {
      this._router.navigate(['/dashboard/times']);
    }, 60000);
  }

  startCounting() {
    this.counting = true;
  }

}
