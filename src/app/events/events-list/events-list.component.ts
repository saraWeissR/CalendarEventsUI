import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import dayGridPlugin, { DayGridView } from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { EventInput } from '@fullcalendar/core';

import { Event } from '../event.model';
import { EventService } from '../events.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  events: EventInput[];

  constructor(private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute) { }
  //@Output() calendarEventInputWasSelected = new EventEmitter<CalendarEventInput>();
  // @Output() selectedEventInput = new EventEmitter<{
  //   el: Object, 
  //   event: EventApi,
  //   jsEvent: MouseEvent, 
  //   view: DayGridView}>();
  //@ViewChild('calendars') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;

  ngOnInit() {
    console.log("EventListComponent.ngOnInit");
    this.events = this.eventService.getEvents();

    this.subscription = this.eventService.eventsChanged
      .subscribe(
        (events: EventInput[]) => {
          this.events = events;
        }
      );
  }

  onNewEvent() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEditItem(eventInput: EventInput) {
    this.eventService.startedEditing
      .next(eventInput);
  }

  // handleEventClick(model: {el: Object, event: EventApi, jsEvent: MouseEvent, view: DayGridView}) {
  //   console.log(model);    
  //   this.eventService.startedEditing
  //     .next(model.event);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // modifyTitle(eventIndex, newTitle) {
  //   this.calendarEvents[eventIndex].title = newTitle;
  // }

  // toggleVisible() {
  //   this.calendarVisible = !this.calendarVisible;
  // }

  // toggleWeekends() {
  //   this.calendarWeekends = !this.calendarWeekends;
  // }

  // gotoPast() {
  //   let calendarApi = this.calendarComponent.getApi();
  //   calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  // }

  // handleDateClick(arg) {
  //   if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
  //     this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
  //       title: 'New Event',
  //       start: arg.date,
  //       allDay: arg.allDay
  //     })
  //   }
  // }

  // onEventInputSelected(calendarEventInput: CalendarEventInput) {
  //   this.calendarEventInputWasSelected.emit(calendarEventInput);
  // }
}
