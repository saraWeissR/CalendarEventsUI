import { Component, OnInit, Input } from '@angular/core';
import { EventInput, EventApi } from '@fullcalendar/core';
//import { CalendarEventInput } from '../calendar-event-input.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  @Input() eventApi: EventApi;

  constructor() {
  }

  ngOnInit() {  
    console.log("this.eventApi", this.eventApi);
  }
}
