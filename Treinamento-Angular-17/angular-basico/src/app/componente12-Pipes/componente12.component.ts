import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media.pipe";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {

  //Texto
  nome:string = 'Junior';

  //objeto
  obj:any = {'nome':'Junior', 'idade':23}

  // Vetor de objetos
 alunos:any = [
  {'nome':'Ana',     'nota1':8, 'nota2':9},
  {'nome':'Julio',   'nota1':7, 'nota2':8},
  {'nome':'Letícia', 'nota1':3, 'nota2':2},
  {'nome':'Ricardo', 'nota1':7, 'nota2':7}
];

}
