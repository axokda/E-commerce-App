import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../core/services/translation.service'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private readonly _translationService = inject(TranslationService);

  ngOnInit(): void {
    this._translationService.changedirection();
  }
 

  selectLanguage(lang: string) {
    this._translationService.changeLang(lang);
  }



}
