import { Injectable } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMqttMessage, MqttService } from 'ngx-mqtt';


@Injectable({
  providedIn: 'root'
})
export class MqttdataService {
  private subscription: Subscription = Subscription.EMPTY;
  topicname: any = 'home/mike';
  msg: any;
  isConnected: boolean = false;
  @ViewChild('msglog', { static: true }) msglog: ElementRef = {} as ElementRef;

  constructor(private _mqttService: MqttService) { }

  // ngOnInit(): void {
  //   this.subscribeNewTopic();
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  subscribeNewTopic(): void {
    console.log('inside subscribe new topic')
    this.subscription = this._mqttService.observe(this.topicname).subscribe((message: IMqttMessage) => {
      this.msg = message;
      console.log('msg: ', JSON.parse(message.payload.toString()));
      // this.logMsg('Message: ' + message.payload.toString() + '<br> for topic: ' + message.topic);
    });
    // this.logMsg('subscribed to topic: ' + this.topicname)
  }

  sendmsg(): void {
    // use unsafe publish for non-ssl websockets
    this._mqttService.unsafePublish(this.topicname, this.msg, { qos: 1, retain: true })
    this.msg = ''
  }
  
  // logMsg(message:any): void {
  //   this.msglog.nativeElement.innerHTML += '<br><hr>' + message;
  // }

  clear(): void {
    this.msglog.nativeElement.innerHTML = '';
  }
}
