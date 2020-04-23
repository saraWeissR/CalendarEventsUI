import { Component, OnInit, Input } from '@angular/core';
import { EventApi } from '@fullcalendar/core';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() eventApi: EventApi;

  constructor() {
  }

  ngOnInit() {  
    console.log("this.eventApi", this.eventApi);
  }
}
