import { TestBed } from '@angular/core/testing';

import { MqttdataService } from './mqttdata.service';

describe('MqttdataService', () => {
  let service: MqttdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MqttdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
