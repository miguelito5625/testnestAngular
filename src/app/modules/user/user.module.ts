import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class UserModule { }
