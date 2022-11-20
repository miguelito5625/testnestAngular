import { Component } from '@angular/core';
import { StorageService } from '../../storage/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(
    private storageService: StorageService
  ) {
    console.log("Token: " + this.storageService.getUser().access_token);
   }

}
