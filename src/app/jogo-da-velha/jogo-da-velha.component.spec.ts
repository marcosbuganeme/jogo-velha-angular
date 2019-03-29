import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './share/jogo-da-velha.service';

describe('JogoDaVelhaComponent', () => {
  let component: JogoDaVelhaComponent;
  let fixture: ComponentFixture<JogoDaVelhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        JogoDaVelhaComponent 
      ],
      providers: [ 
        JogoDaVelhaService 
      ]
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
