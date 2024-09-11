import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../core/services/translation.service'; 
import { _CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  counter: number = 0

private readonly _cartservice = inject(_CartService)

  private readonly _translationService = inject(TranslationService);


  getLoggedUserCart = () => {
    this._cartservice.getLoggedUserCart().subscribe({
      next: (res) => {
        this._cartservice.cartCounter.next(res.numOfCartItems);
      },
     
    })
  }

  ngOnInit(): void {
    this.getLoggedUserCart()
    this._cartservice.cartCounter.subscribe({
      next:(counter) => {
        this.counter = counter
      }
    })
    this._translationService.changedirection();
  }
 

  selectLanguage(lang: string) {
    this._translationService.changeLang(lang);
  }



}
