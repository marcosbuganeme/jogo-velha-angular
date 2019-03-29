import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './share';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
    this.jogoDaVelhaService.inicializar()
  }

  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo()
  }

  jogar(posicaoX: number, posicaoY: number):void {
    this.jogoDaVelhaService.jogar(posicaoX, posicaoY)
  }

  exibirX(posicaoX: number, posicaoY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posicaoX, posicaoY)
  }
  exibirO(posicaoX: number, posicaoY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posicaoX, posicaoY)
  }

  exibirVitoria(posicaoX: number, posicaoY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posicaoX, posicaoY)
  }

  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio
  }

  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal
  }

  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro
  }

  get jogador(): number {
    return this.jogoDaVelhaService.jogador
  }

  novoJogo(): void {
    this.jogoDaVelhaService.novoJogo();
  }
}