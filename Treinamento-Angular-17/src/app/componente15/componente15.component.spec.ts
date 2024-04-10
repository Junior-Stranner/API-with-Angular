import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente15Component } from './componente15.component';

describe('Componente15Component', () => {
  let component: Componente15Component;
  let fixture: ComponentFixture<Componente15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
