import { TestBed } from "@angular/core/testing";
import { Componente17Component } from "./componente17.component";
import { FormsModule } from "@angular/forms";

describe('Testando o Componente 17', () => {

  // Inicialização
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule, // Importação do módulo de formulários
        Componente17Component,
      ]
    }).compileComponents();
  });

  // Validar a variável nome
  it('deve ter o nome "Junior"', () => {
    // Fixture
    const fixture = TestBed.createComponent(Componente17Component);

    // Obter o componente
    const componente = fixture.componentInstance;

    // Validação
    expect(componente.nome).toBe('Junior');
  });

  // Validar o valor inicial da variável média
  it('deve ter a média inicial como 0', () => {
    // Fixture
    const fixture = TestBed.createComponent(Componente17Component);

    // Obter o componente
    const componente = fixture.componentInstance;

    // Validação
    expect(componente.media).toBe(0);
  });

  // Validar o retorno do método de cálculo
  it('deve calcular a média corretamente', () => {
    // Fixture
    const fixture = TestBed.createComponent(Componente17Component);

    // Obter o componente
    const componente = fixture.componentInstance;

    // Executar função
    const retorno = componente.calculo(10, 8);

    // Validar
    expect(retorno).toBe(9);
  });

  // Validar se a variável média é inicializada com 0 e após executar
  // a função calculo o valor é atualizado
  it('deve atualizar a variável média após executar o cálculo', () => {
    // Fixture
    const fixture = TestBed.createComponent(Componente17Component);

    // Obter o componente
    const componente = fixture.componentInstance;

    // Validar se a variável média possui o valor 0
    expect(componente.media).toBe(0);

    // Executar função
    const retorno = componente.calculo(5, 9);

    // Atribuir o retorno da função para a variável média
    componente.media = retorno;

    // Validar se a variável média possui o valor 7
    expect(componente.media).toBe(7);
  });

  // Teste para verificar se a função atualizarNome está funcionando
  it('deve atualizar o nome quando o campo de texto for alterado', () => {
    // Fixture
    const fixture = TestBed.createComponent(Componente17Component);

    // Obter o componente
    const componente = fixture.componentInstance;

    // Obter o elemento de entrada do nome
    const inputNome = fixture.nativeElement.querySelector('#nome');

    // Simular a digitação do novo nome
    inputNome.value = 'Ana';
    inputNome.dispatchEvent(new Event('input'));

    // Detectar alterações no componente
    fixture.detectChanges();

    // Validar se o nome foi atualizado
    expect(componente.nome).toBe('Ana');
  });

});

