import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'eszsw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Array<any>;
  loginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.login = [
      {
        element: 'input',
        label: 'Email',
        type: 'email',
        formControlName: 'email',
        validators: [Validators.required, Validators.email],
        placeholder: '',
        errorMessage: 'Email is not valid',
        disabled: false,
        icon: 'email',
        value: 'emilio@example.com'
      },
      {
        element: 'input',
        label: 'Password',
        type: 'password',
        formControlName: 'password',
        validators: [Validators.required, Validators.minLength(8)],
        placeholder: '',
        errorMessage: 'Password is required',
        disabled: false,
        icon: 'passIcon',
        value: 'emilio1234'
      }
    ];
    this.loginForm = this._fcs.createFormGroup(this.login);
  }

  onSubmit(form: FormGroup): void {
    console.log(form);
  }
  me() {
    this._auth.currentUser();
  }
  logout() {
    this._auth.logoutUser();
  }
}
