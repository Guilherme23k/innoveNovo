import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Item {
  titulo: string;
  texto: string;
  img: string;
}

@Component({
  selector: 'app-msv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './msv.component.html',
  styleUrl: './msv.component.scss'
})


export class MSVComponent {
  
 lista: Item[] = [

  {titulo: 'Missão', texto: 'Criando experiencias transformadoras,promovendo educação e desenvolvimento pessoal,mudando perspectivas.', img: '/bandeira1.svg'},
  {titulo: 'Visão', texto: 'Queremos ser refêrencia na área de eventos,ganhando reconhecimento pela inovação e transformação na vida de jovens.', img: '/badge.svg'},
  {titulo: 'Valores', texto: 'São baseados em :Aprendizado contínuo;Impacto positivo;Comunicação assertiva;Inovação.', img: '/love.svg'}
  ];

}
