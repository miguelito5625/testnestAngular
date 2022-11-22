import { Component, OnInit } from '@angular/core';
import { MqttdataService } from '../../services/mqttdata.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(
    private mqttDataService: MqttdataService
  )
  {}

  ngOnInit(){
    this.mqttDataService.subscribeNewTopic();
  }

}
