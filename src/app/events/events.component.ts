import { Component, OnInit } from '@angular/core';
//import { CalendarEventInput } from './calendar-event-input.model';
import { EventInput, EventApi } from '@fullcalendar/core';
import DayGridView from '@fullcalendar/daygrid/AbstractDayGridView';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  selectedEventInput: EventApi;
  constructor() { }

  ngOnInit() {
  }

  onSelectedEventInput(model: {el: Object, event: EventApi, jsEvent: MouseEvent, view: DayGridView}) {
    this.selectedEventInput = model.event;
    console.log(model);
  }

}
