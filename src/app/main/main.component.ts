import { Component, ElementRef, AfterViewInit, HostBinding, ViewChild } from '@angular/core';
import { CarrouselComponent } from "../carrousel/carrousel.component";
import { MSVComponent } from "../msv/msv.component";
import { FooterComponent } from "../footer/footer.component";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CarrouselComponent, MSVComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  animations: [
    trigger('slideInLeft', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(100px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', animate('800ms ease-out'))
    ])
  ]
})
export class MainComponent implements AfterViewInit{

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
}