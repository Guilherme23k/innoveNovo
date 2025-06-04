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

  {titulo: 'Missão', texto: 'Transformar vidas com educação e experiências que inspiram crescimento e novas perspectivas.', img: '/bandeira1.svg'},
  {titulo: 'Visão', texto: 'Ser referência em eventos que impactam jovens com inovação e aprendizado significativo.', img: '/badge.svg'},
  {titulo: 'Valores', texto: 'Prezamos por inovação, impacto positivo, empatia, aprendizado contínuo e comunicação clara.', img: '/love.svg'}
  ];

}
