import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StorageService } from '../../storage/storage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  checkoutForm = this.formBuilder.group({
    username: 'john',
    password: 'changeme'
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService
  ){}

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.authService.login(this.checkoutForm.value).subscribe(data => {
      console.log(data);
      this.storageService.saveUser(data);
    });
  }
  
}
