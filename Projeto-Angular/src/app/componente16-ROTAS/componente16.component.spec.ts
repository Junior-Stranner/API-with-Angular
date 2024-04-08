import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente16Component } from './componente16.component';

describe('Componente16Component', () => {
  let component: Componente16Component;
  let fixture: ComponentFixture<Componente16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
