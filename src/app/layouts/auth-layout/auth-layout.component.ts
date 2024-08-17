import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { AuthNavbarComponent } from "../../component/auth-navbar/auth-navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [NavbarComponent, AuthNavbarComponent,RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
