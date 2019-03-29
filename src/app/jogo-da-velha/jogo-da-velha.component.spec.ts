import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';

describe('JogoDaVelhaComponent', () => {
  let component: JogoDaVelhaComponent;
  let fixture: ComponentFixture<JogoDaVelhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoDaVelhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoDaVelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('cria componente de jogo da velha', () => {
    expect(component).toBeTruthy();
  });
});
