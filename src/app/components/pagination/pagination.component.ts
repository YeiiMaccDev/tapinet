import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() currentPage!: number;

  @Output() incrementPage = new EventEmitter<void>();
  @Output() decrementPage = new EventEmitter<void>();


  incrementPageAction(): void {
    this.incrementPage.emit();
  }

  decrementPageAction(): void {
    this.decrementPage.emit();
  }
}
