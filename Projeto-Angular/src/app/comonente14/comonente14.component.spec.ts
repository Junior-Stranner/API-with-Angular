import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comonente14Component } from './comonente14.component';

describe('Comonente14Component', () => {
  let component: Comonente14Component;
  let fixture: ComponentFixture<Comonente14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comonente14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comonente14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
