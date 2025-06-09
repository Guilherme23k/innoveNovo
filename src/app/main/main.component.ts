import { Component, ElementRef, AfterViewInit, HostBinding } from '@angular/core';
import { CarrouselComponent } from "../carrousel/carrousel.component";
import { MSVComponent } from "../msv/msv.component";
import { FooterComponent } from "../footer/footer.component";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CarrouselComponent, MSVComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
