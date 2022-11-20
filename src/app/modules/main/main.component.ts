import { Component } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
    private storageService: StorageService
  ){
    this.storageService.deleUser();
    console.log('Storage Service:', this.storageService.getUser().access_token);
  }
}
