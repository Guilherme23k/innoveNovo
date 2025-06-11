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

  carrouselVisible = 'hidden';
  msvVisible = 'hidden';
  footerVisible = 'hidden';

  @ViewChild('carrousel', {static:true}) carrouselEl!:ElementRef;
  @ViewChild('msv', {static:true}) msvEl!: ElementRef;
  @ViewChild('footer', { static: true }) footerEl!: ElementRef;


  ngAfterViewInit(): void {
    const createObserver = (el: ElementRef, callback: () => void) => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            callback();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      observer.observe(el.nativeElement);
    };

    createObserver(this.carrouselEl, () => this.carrouselVisible = 'visible');
    createObserver(this.msvEl, () => this.msvVisible = 'visible');
    createObserver(this.footerEl, () => this.footerVisible = 'visible');
}
}