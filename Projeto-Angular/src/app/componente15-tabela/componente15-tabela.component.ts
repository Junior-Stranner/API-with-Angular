import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente15-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente15-tabela.component.html',
  styleUrl: './componente15-tabela.component.css'
})
export class Componente15TabelaComponent {

  // Vetor
  @Input() vetor: string[] = [];
}
