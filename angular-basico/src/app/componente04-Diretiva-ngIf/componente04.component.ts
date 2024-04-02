import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente04',
  standalone: true,
  imports: [CommonModule],//Para Trabalhar com uma DIRETIVA
  templateUrl: './componente04.component.html',
  styleUrl: './componente04.component.css'
})
export class Componente04Component {

  //variável para exibir ou ocultar o quadrado
  exibir:boolean= true;

  //função para exibir ou ocultar o quadrado
  acao(){
    if(this.exibir === true){
      this.exibir = false;
    }else{
      this.exibir = true;
    }
  }
}
