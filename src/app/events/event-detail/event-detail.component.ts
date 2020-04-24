import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
//import { CalendarEventInput } from '../calendar-event-input.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  // @Input() eventInput: EventInput;
  // @Output() upsertEventInput = new EventEmitter<{mode: string, eventApi: EventInput}>();

  constructor() {
  }

  ngOnInit() {  
    console.log("EventDetailsComponent.ngOnInit");
  }

  onSelect(mode: string) {    
    // const upsertModel = {
    //   mode: mode,
    //   eventInput: this.eventInput
    // };
    // this.upsertEventInput.emit(upsertModel);
    // //this.mode = mode.emit();
    // console.log("EventDetailsComponent.onSelect:" + upsertModel);
  }
}
