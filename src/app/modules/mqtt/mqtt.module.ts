import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MqttRoutingModule } from './mqtt-routing.module';
import { Test1Component } from './components/test1/test1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Test1Component
  ],
  imports: [
    CommonModule,
    MqttRoutingModule,
    FormsModule
  ]
})
export class MqttModule { }
