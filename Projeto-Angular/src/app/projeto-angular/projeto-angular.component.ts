import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projeto-angular',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './projeto-angular.component.html',
  styleUrl: './projeto-angular.component.css'
})
export class ProjetoAngularComponent {
  
// Objeto de formulário
formulario = new FormGroup({
  nome   : new FormControl(''),
  idade  : new FormControl(null),
  cidade : new FormControl('')
});
}
