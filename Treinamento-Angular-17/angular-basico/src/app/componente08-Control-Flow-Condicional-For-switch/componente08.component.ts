import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

  //Variável de média
  media:number = 8;

   //Variável de média
   mediaa:number = 8;

   //Vetor
   nomes:string[] = ['Junior','Ralf', 'Bubu','Ana',"Danilo"]

   //Linguagem
   linguagem:string = 'HTML';
}
