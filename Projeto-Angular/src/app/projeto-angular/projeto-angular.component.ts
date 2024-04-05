import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projeto-angular',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './projeto-angular.component.html',
  styleUrl: './projeto-angular.component.css'
})
export class ProjetoAngularComponent {
  
// Objeto de formulário
formulario = new FormGroup({
  nome   : new FormControl('',[Validators.required, Validators.minLength(3)]),
  idade  : new FormControl(null,[Validators.required, Validators.min(0),Validators.max(120)]),
  cidade : new FormControl('',[Validators.required, Validators.minLength(3)])
});

//Visibilidade do botôes
btnCadastrar:boolean = true;

//Vetor 
vetor:Pessoa[] = [];

//Função de cadastro
cadastrar(){

  //cadastro do vetor
 this.vetor.push(this.formulario.value as Pessoa);

   //limpeza dos inputs
   this.formulario.reset();

   //Visuabilidade via console
   console.table(this.vetor);
   }
}
