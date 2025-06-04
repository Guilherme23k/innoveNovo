import { Component } from '@angular/core';


interface Item {
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-msv',
  standalone: true,
  imports: [],
  templateUrl: './msv.component.html',
  styleUrl: './msv.component.scss'
})


export class MSVComponent {
  
 lista: Item[] = [

  {titulo: 'Missao', texto: 'Criando experiencias transformadoras,promovendo educação e desenvolvimento pessoal,mudando perspectivas.'},
  
  ];

}
