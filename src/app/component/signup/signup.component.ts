import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertErrorComponent } from "../../shared/alert-error/alert-error.component";
import { confirmPassword } from '../../shared/utils/confirm-password.utils';
import { signupValidators } from '../../shared/Validators/register.Validators';




@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, AlertErrorComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {


  register = new FormGroup({
    name: new FormControl(null,signupValidators.name),
    email: new FormControl(null,signupValidators.email),
    password: new FormControl(null,signupValidators.password),
    rePassword: new FormControl(null),
  }, confirmPassword)


  sendData() {
    if (this.register.valid) {
      console.log(this.register.value);

    }

  }



}
