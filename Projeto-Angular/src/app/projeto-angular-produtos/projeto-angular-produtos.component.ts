import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-projeto-angular-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projeto-angular-produtos.component.html',
  styleUrl: './projeto-angular-produtos.component.css'
})
// Exporta a classe do componente Angular para que ela possa ser importada em outros arquivos
export class ProjetoAngularProdutosComponent {

  // Declaração de uma variável chamada "vetor" que armazenará uma matriz de objetos do tipo 'Produto'
  vetor: Produto[] = [];

  //visibilidade dos botões
  btnCadastrar:boolean = true;

  //Objeto de Formulário
  formulario = new FormGroup({
  id: new FormControl(null),
  nome:new FormControl(''),
  valor:new FormControl(null)
  });

  // Construtor da classe, que recebe um parâmetro do tipo 'ProdutoService'
  constructor(private serviço: ProdutoService) {}

  // Método chamado durante a inicialização do componente Angular
  ngOnInit() {
    // Chama o método 'selecionar()' ao inicializar o componente
    this.selecionar();
  }

  // Método responsável por selecionar todos os produtos
  selecionar() {
    // Chama o método 'selecionar()' do serviço 'ProdutoService' e se inscreve para receber o retorno
    this.serviço.selecionar().subscribe(retorno => {
      // Atribui o retorno (um vetor de produtos) à variável 'vetor'
      this.vetor = retorno;});
  }
}
