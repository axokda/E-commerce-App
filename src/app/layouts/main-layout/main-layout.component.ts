import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
showBtn: any;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  @HostListener('window:scroll') scrollTop(){
    let scrollToTop = document.documentElement.scrollTop;
    if (scrollToTop > 750) {
      
      this.showBtn = true;
    } else {
      this.showBtn = false;
    }
  }

}

