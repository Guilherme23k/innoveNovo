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
  styleUrl: './main.component.scss',
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(30px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', animate('700ms ease-out'))
    ])
  ]
})
export class MainComponent implements AfterViewInit{

  @HostBinding('@fadeInUp') animationState = 'hidden';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animationState = 'visible';
          observer.unobserve(this.el.nativeElement); // anima só uma vez
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }

}
