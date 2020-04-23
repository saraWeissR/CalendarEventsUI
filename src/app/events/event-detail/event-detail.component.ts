import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventInput, EventApi } from '@fullcalendar/core';
//import { CalendarEventInput } from '../calendar-event-input.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() eventApi: EventApi;
  @Output() upsertEventApi = new EventEmitter<{mode: string, eventApi: EventApi}>();

  constructor() {
  }

  ngOnInit() {  
    console.log("EventDetailsComponent.ngOnInit");
  }

  onSelect(mode: string) {    
    const upsertModel = {
      mode: mode,
      eventApi: this.eventApi
    };
    this.upsertEventApi.emit(upsertModel);
    //this.mode = mode.emit();
    console.log("EventDetailsComponent.onSelect:" + upsertModel);
  }
}
