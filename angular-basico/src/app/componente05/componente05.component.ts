import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente05',
  standalone: true,
  imports: [CommonModule],//Para Trabalhar com uma DIRETIVA
  templateUrl: './componente05.component.html',
  styleUrl: './componente05.component.css'
})
export class Componente05Component {

  //Vetor de nomes
  nomes:string[] = ["Ariane","Bruno","Caio","Denise"]
}

/*NGFOR  

*ngIf	Estrutura de condicional, utiliza o padrão de um operador ternário.
*ngFor	Estrutura de repetição, ideal para trabalharmos com estruturas de listas e tabelas.
[ngSwitch]	Estrutura de escolha, ideal quando há diversas opções de retornos, dependendo do valor de uma variável.
[ngClass]	Estrutura para adicionar dinamicamente uma classe CSS.*/