import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-projeto-angular-produtos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
  nome:new FormControl('',[Validators.required, Validators.minLength(3)]),
  valor:new FormControl(null,[Validators.min(0.0), Validators.max(1000000000.0)])
  });

  // Construtor da classe, que recebe um parâmetro do tipo 'ProdutoService'
  constructor(private servico: ProdutoService) {}

  // Método chamado durante a inicialização do componente Angular
  ngOnInit() {
    // Chama o método 'selecionar()' ao inicializar o componente
    this.selecionar();
    }

  // Método responsável por selecionar todos os produtos
  selecionar() {
    // Chama o método 'selecionar()' do serviço 'ProdutoService' e se inscreve para receber o retorno
    this.servico.selecionar().subscribe(retorno => {
      // Atribui o retorno (um vetor de produtos) à variável 'vetor'
      this.vetor = retorno;});
  }
  

  //Metodo para cadastrar Produtos
  cadastrar(){
     // Verifica se já existe um produto com o mesmo nome
     if (this.produtoJaExiste(this.formulario.value.nome)) {
      console.log("Já existe um produto com esse nome.");
      return;
    }
    
    this.servico.cadastrar(this.formulario.value as Produto)
    .subscribe(retorno => {


      this.vetor.push(retorno);

      this.formulario.reset();
    });
  
  }

  
  produtoJaExiste(nome: string): boolean {
    return this.vetor.some(produto => produto.nome === nome);
  }

  //Método para selecionar um Produto especifico
  selecionarProduto(indice:number){

    this.formulario.setValue({
       id: this.vetor[indice].id,
      nome:this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });

    this.btnCadastrar = false;
  }

  // Função de alteração
  alterar(){
  // Alterar vetor
  this.servico.alterar(this.formulario.value as Produto)
  .subscribe(retorno => {

    //obter o indice do objeto alterado
    let indiceAlterado = this.vetor.findIndex(obj => {
      return this.formulario.value.id === obj.id
    });

    //Aletrar vetor
    this.vetor [indiceAlterado] = retorno;

    //Limpar o formulário
    this.formulario.reset();

    //Visibilidade dos botões
    this.btnCadastrar = true;
   });
  }

  //Método para remover produtos
  remover(){

    this.servico.remover(this.formulario.value.id)
    .subscribe(() => {

      //Obter o indice do vetor que será removido
      let indiceRemovido = this.vetor.findIndex(obj => {
        return  obj.id  === this.formulario.value.id;
    });

    //Remover objeto do vetor
    this.vetor.splice(indiceRemovido, 1);

    // Limpar formulário
    this.formulario.reset();


    //Visibilidade dos botões
    this.btnCadastrar = true;

   });
 }
}