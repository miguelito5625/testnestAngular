import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  checkoutForm = this.formBuilder.group({
    user: 'mike',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ){}

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    // this.checkoutForm.reset();
  }
  
}
