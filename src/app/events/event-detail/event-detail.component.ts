import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import { EventService } from '../events.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { CalendarEventInput } from '../calendar-event-input.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  eventInput: EventInput;
  id: string;
  // @Output() upsertEventInput = new EventEmitter<{mode: string, eventApi: EventInput}>();

  constructor(private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  // <img
  // [src]="eventInput.extendedProps.imagePath"
  // alt="{{ eventInput.extendedProps.imageAlt }}"
  // class="img-responsive"
  // style="max-height: 300px;">

//   <div class="row">
//   <div class="col-xs-12">
//     Last Update: {{ eventInput.extendedProps.updateDate }}
//   </div>
// </div>

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params);
        }
      )
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
