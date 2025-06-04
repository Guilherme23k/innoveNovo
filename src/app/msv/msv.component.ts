import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Item {
  titulo: string;
  texto: string;
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

  {titulo: 'Missão', texto: 'Criando experiencias transformadoras,promovendo educação e desenvolvimento pessoal,mudando perspectivas.'},
  {titulo: 'Visão', texto: 'Queremos ser refêrencia na área de eventos,ganhando reconhecimento pela inovação e transformação na vida de jovens.'},
  {titulo: 'Valores', texto: 'São baseados em :Aprendizado contínuo;Impacto positivo;Comunicação assertiva;Inovação.'}
  ];

}
