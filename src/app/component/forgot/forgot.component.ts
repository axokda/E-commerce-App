import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertErrorComponent } from '../../shared/alert-error/alert-error.component';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SigninComponent } from '../signin/signin.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [ReactiveFormsModule,AlertErrorComponent,SigninComponent,NgIf],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent {

  isBtnSubmit: boolean = false
  errorMessage: string = ''
  
steps: number = 1


  private readonly _AuthService = inject(AuthService)
  private readonly _Router = inject(Router)

  forgotPasswords = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  })


  verifyResetCode = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  })

  resetPassword = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required]),
  })




  submitStep1() {
    this.isBtnSubmit = true;
    if (this.forgotPasswords.valid) {
      const email = this.forgotPasswords.get('email')?.value;
      const resetPasswordEmailControl = this.resetPassword.get('email');
      if (resetPasswordEmailControl && email !== undefined) {
        resetPasswordEmailControl.setValue(email);
      }
      this._AuthService.forgotPasswords(this.forgotPasswords.value).subscribe({
        next: (res) => {
          this.steps = 2;
          this.isBtnSubmit = false;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
          this.errorMessage = err.error.message;
          this.isBtnSubmit = false;
        }
      });
    }
  }
  submitStep2() {
    this.isBtnSubmit = true
    if (this.verifyResetCode.valid) {
      this._AuthService.verifyResetCode(this.verifyResetCode.value).subscribe({
        next: (res) => {
          this.steps = 3
          this.isBtnSubmit = false
        }, error: (err:HttpErrorResponse) => {
          console.log(err.error.message);
          this.errorMessage = err.error.message
          this.isBtnSubmit = false
        }
      })
    }
  }
  submitStep3() {
    this.isBtnSubmit = true
    if (this.resetPassword.valid) {
      this._AuthService.resetPassword(this.resetPassword.value).subscribe({
        next: (res) => {
          this.steps = 4
          this.isBtnSubmit = false
          localStorage.setItem('token', res.token)
          this._AuthService.saveUserData()
          this._Router.navigate(['/home'])
        }, error: (err:HttpErrorResponse) => {
          console.log(err.error.message);
          this.errorMessage = err.error.message
          this.isBtnSubmit = false
        }
      })
    }
  }

}