import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente06',
  standalone: true,
  imports: [CommonModule],//Para Trabalhar com uma DIRETIVA
  templateUrl: './componente06.component.html',
  styleUrl: './componente06.component.css'
})
export class Componente06Component {

  //Variável contendo uma Linguagem (HTML,CSS ,JS)
  linguagem:string = 'HTML'
}

/*A diretiva ngSwitch é ideal quando temos diversos tipos de retornos para oferecer 
ao nosso cliente. Podendo ser desde a exibição de uma estrutura HTML, até um componente completo.
*/
