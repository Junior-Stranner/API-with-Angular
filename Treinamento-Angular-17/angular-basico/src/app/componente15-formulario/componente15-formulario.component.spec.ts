import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente15FormularioComponent } from './componente15-formulario.component';

describe('Componente15FormularioComponent', () => {
  let component: Componente15FormularioComponent;
  let fixture: ComponentFixture<Componente15FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente15FormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente15FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
