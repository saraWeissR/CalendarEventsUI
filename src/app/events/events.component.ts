import { Component, OnInit } from '@angular/core';

import { EventService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("EventsComponent.ngOnInit");
  }
}
