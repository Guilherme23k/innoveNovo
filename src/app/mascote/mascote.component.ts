import { Component } from '@angular/core';

@Component({
  selector: 'app-mascote',
  standalone: true,
  imports: [],
  templateUrl: './mascote.component.html',
  styleUrl: './mascote.component.scss'
})
export class MascoteComponent {

  falas:string[] = [
    'Oi! Tudo bem?',
    'Clica de novo pra eu falar mais!',
    'Sabia que eu adoro eventos?',
    'Corujas são sábias, igual eu 😎',
    'Quer ver mais? É só continuar rolando!',
    'Você é demais! 🦉✨'
  ]

  falaAtual = this.falas[0];
  index = 0;

  trocarFala(){
    this.index = (this.index + 1) % this.falas.length;
    this.falaAtual = this.falas[this.index];
  }

}
