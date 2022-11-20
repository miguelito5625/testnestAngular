import { Component, isDevMode, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './modules/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nestFrontEnd';
  private apiServer = environment.backendServer;

  constructor() { }

  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
    console.log('Api Server:', this.apiServer);
  }
}
