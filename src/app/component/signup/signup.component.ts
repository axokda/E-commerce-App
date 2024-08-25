import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertErrorComponent } from "../../shared/alert-error/alert-error.component";
import { confirmPassword } from '../../shared/utils/confirm-password.utils';
import { signupValidators } from '../../shared/Validators/register.Validators';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, AlertErrorComponent, NgClass],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  isBtnSubmit: boolean = false
  errorMessage: string = ''
  
  private readonly _AuthService = inject(AuthService)
  private readonly _Router = inject(Router)

  register = new FormGroup({
    name: new FormControl(null, signupValidators.name),
    email: new FormControl(null, signupValidators.email),
    password: new FormControl(null, signupValidators.password),
    rePassword: new FormControl(null),
  }, confirmPassword)


  sendData() {
    this.isBtnSubmit = true
    if (this.register.valid) {
      this._AuthService.signup(this.register.value).subscribe({
        next: (res) => {
          if (res.message=="success") {

        this._Router.navigate(['/signin'])

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