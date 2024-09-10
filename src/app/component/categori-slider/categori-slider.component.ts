import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from '../../core/services/categories.service';

@Component({
  selector: 'app-categori-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './categori-slider.component.html',
  styleUrl: './categori-slider.component.scss'
})
export class CategoriSliderComponent {
  categories:any=[]
  private readonly _catogoriesService = inject(CategoriesService)
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    mouseDrag: true,
    rtl: true,
    touchDrag: false,
    margin: 10,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: false
  }


getCategories(){
this._catogoriesService.getCategories().subscribe({
  next:(resp)=>{
    console.log(resp);
    this.categories=resp.data
  },

  error:(err)=>{
    console.log(err);
  }

})
}

  ngOnInit(): void {
    this.getCategories()
  }
}
