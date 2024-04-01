import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  //variável de imagem
  imagem:string = "assets/Dia.jpeg"
//Função para alterar a imagem
  alterarImagem(){
    if(this.imagem === 'assets/Dia.jpeg'){
      this.imagem = 'assets/noite.jpg';
    }else{
      this.imagem = 'assets/Dia.jpeg'
      }
    }
  }
