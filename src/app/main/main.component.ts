import { Component } from '@angular/core';
import { CarrouselComponent } from "../carrousel/carrousel.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CarrouselComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
