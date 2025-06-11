import { CommonModule } from '@angular/common';
import { Component,  ElementRef, AfterViewInit, ViewChild  } from '@angular/core';
import {
  trigger, state, style, transition, animate
} from '@angular/animations';


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
  styleUrl: './msv.component.scss',
  animations: [
    trigger('slideInLeft', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-100px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', animate('600ms ease-out'))
    ])
  ]
})


export class MSVComponent implements AfterViewInit{
  
  animationState='hidden';

  @ViewChild('animado', { static: true }) animado!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animationState = 'visible';
        }
      });
    });

    observer.observe(this.animado.nativeElement);
  }

 lista: Item[] = [

  {titulo: 'Missão', texto: 'Transformar vidas com educação e experiências que inspiram crescimento e novas perspectivas.', img: '/bandeira1.svg'},
  {titulo: 'Visão', texto: 'Ser referência em eventos que impactam jovens com inovação e aprendizado significativo.', img: '/badge.svg'},
  {titulo: 'Valores', texto: 'Prezamos por inovação, impacto positivo, empatia, aprendizado contínuo e comunicação clara.', img: '/love.svg'}
  ];

}
