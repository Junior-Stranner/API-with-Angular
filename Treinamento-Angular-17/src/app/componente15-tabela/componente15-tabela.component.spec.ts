import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente15TabelaComponent } from './componente15-tabela.component';

describe('Componente15TabelaComponent', () => {
  let component: Componente15TabelaComponent;
  let fixture: ComponentFixture<Componente15TabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente15TabelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente15TabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
