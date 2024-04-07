import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoAngularProdutosComponent } from './projeto-angular-produtos.component';

describe('ProjetoAngularProdutosComponent', () => {
  let component: ProjetoAngularProdutosComponent;
  let fixture: ComponentFixture<ProjetoAngularProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoAngularProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetoAngularProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
