import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];
  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated Component',
        date: new Date('09/03/2020 05:25:50'),
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date('09/03/2020 05:29:33'),
      },
      {
        id: '3',
        text: 'Added Observables fun',
        date: new Date('09/03/2020 05:30:40'),
      },
    ];
  }
  getLogs() {
    return this.logs;
  }
}
