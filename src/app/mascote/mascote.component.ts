import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mascote',
  standalone: true,
  imports: [CommonModule],
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
  'Você é demais! 🦉✨',
  'Já tomou água hoje?',
  'Se precisar de ajuda, estarei por aqui!',
  'Tenho olhos de águia… ops, de coruja!',
  'Sabia que trabalhar com eventos é uma arte?',
  'Foco, força e… penas!',
  'Minha missão? Ajudar você sempre que puder!',
  'Sábias decisões começam com boas conversas!',
  'Curtiu meu visual? Fui feito com carinho!',
  'Você tá voando! Continue assim! 🕊️',
  'Eu vi o futuro… e ele é incrível pra você!',
  'O mundo precisa de mais ideias como as suas.',
  'Hoje é um ótimo dia pra aprender algo novo!'
  ]

  falaAtual = this.falas[0];
  index = 0;
  pulando = false;
  falouAlgumaCoisa = false;

  trocarFala(){
    if (!this.falouAlgumaCoisa) {
      this.falouAlgumaCoisa = true;
      this.falaAtual = this.falas[0];
      this.index = 0;
    } else {
      this.index = (this.index + 1) % this.falas.length;
      this.falaAtual = this.falas[this.index];
    }

    this.pulando = true;
    setTimeout(() => this.pulando = false, 300);
  }



}
