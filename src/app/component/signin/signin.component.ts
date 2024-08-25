import { Component, inject } from '@angular/core';
import { AlertErrorComponent } from "../../shared/alert-error/alert-error.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { signupValidators } from '../../shared/Validators/register.Validators';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [AlertErrorComponent,NgClass,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  isBtnSubmit: boolean = false
  errorMessage: string = ''
  
  private readonly _AuthService = inject(AuthService)
  private readonly _Router = inject(Router)

  loginForm = new FormGroup({
    email: new FormControl(null, signupValidators.email),
    password: new FormControl(null, signupValidators.password),
  },)


  sendData() {
    this.isBtnSubmit = true
    if (this.loginForm.valid) {
      this._AuthService.signin(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.message=="success") {
        localStorage.setItem('token', res.token)
        this._AuthService.saveUserData()
        this._Router.navigate(['/home'])

          this.isBtnSubmit = false
          }
        }, error: (err:HttpErrorResponse) => {
          console.log(err.error.message);
          this.errorMessage = err.error.message
          this.isBtnSubmit = false
        }
      })
    }
  }

}