import { Validators } from "@angular/forms";



export const signupValidators = {
    name:  [Validators.required, Validators.minLength(3), Validators.maxLength(30)],
    email:  [Validators.required, Validators.email],
    password: [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$')
      ]
      }