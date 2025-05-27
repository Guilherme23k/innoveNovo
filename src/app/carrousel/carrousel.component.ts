import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarrouselComponent {

  cards= [
    {
      imageUrl: "https://i.imgur.com/i3hMYsG.jpeg",
      title: 'Outubro Rosa',
      priceIndex: 0,
      starsCount: 4,
    },  
    {
      imageUrl: "https://i.imgur.com/B5ebvwT.jpeg",
      title: 'Halloween',
      priceIndex: 0,
      starsCount: 4,
    },  
    {
      imageUrl: "https://i.imgur.com/4Q2Ep8f.jpeg",
      title: 'Novembro Azul',
      priceIndex: 0,
      starsCount: 4,
    },  
    {
      imageUrl: "https://innoveeventos.netlify.app/img/Moeda.jpg",
      title: 'Museu da Moeda',
      priceIndex: 0,
      starsCount:4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/cine-espro.jpg",
      title: 'Cine ESPRO',
      priceIndex: 0,
      starsCount:4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/doacao.jpg",
      title: 'Doação para o RS',
      priceIndex: 0,
      starsCount:4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/maio-laranja.jpg",
      title: 'Maio laranja',
      priceIndex: 0,
      starsCount: 4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/junina.jpg",
      title: 'Festa Junina',
      priceIndex: 0,
      starsCount: 4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/Museu%20da%20Lingua%20Portuguesa.jpg",
      title: 'Museu da língua Portuguesa',
      priceIndex: 0,
      starsCount: 4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/mes.png",
      title: 'Aniversariantes',
      priceIndex: 1,
      starsCount: 4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/ipiranga.webp",
      title: 'Museu do ipiranga',
      priceIndex: 1,
      starsCount: 4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/holocaustro.jpg",
      title: 'Museu do Holocausto',
      priceIndex: 1,
      starsCount: 4,
    },
    
  ]

  public swiperConfig = {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: true,
    pagination: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      0: { // Para telas muito pequenas (mobile)
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: { // Pequenas telas (tablets pequenos)
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: { // Tablets médios
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: { // Telas maiores
        slidesPerView: 2,
        spaceBetween: 30,
      },
    }
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      
      const swiperEl = document.querySelector('swiper-container');
      if (swiperEl) {
        Object.assign(swiperEl, this.swiperConfig);
        swiperEl.initialize(); 
      }
    }

  }



}
