import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente06DiretivaNgSwitchComponent } from './componente06-diretiva-ng-switch.component';

describe('Componente06DiretivaNgSwitchComponent', () => {
  let component: Componente06DiretivaNgSwitchComponent;
  let fixture: ComponentFixture<Componente06DiretivaNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente06DiretivaNgSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente06DiretivaNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
