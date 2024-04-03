import { Component } from '@angular/core';

@Component({
  selector: 'app-projeto-angular',
  standalone: true,
  imports: [],
  templateUrl: './projeto-angular.component.html',
  styleUrl: './projeto-angular.component.css'
})
export class ProjetoAngularComponent {

  nome:string;
  idade:number = null;
}
