import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import dayGridPlugin, { DayGridView } from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { EventInput, EventApi, Calendar } from '@fullcalendar/core';

import { Event } from '../event.model';
import { EventService } from '../events.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('calendar', {'static': true}) calendarComponent: FullCalendarComponent;
  calendarApi: Calendar;
  defaultDate = new Date();
  timeZone = 'UTC';

  year: number;
  month: number;
  day: number;

  private subscription: Subscription;
  events: EventInput[];

  constructor(private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute) { }

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;

  ngAfterViewInit() { 
    //TODO: Add an issue to understand the difference between ngOnInit vs ngAfterViewInit usage.
    this.calendarApi = this.calendarComponent.getApi();
    console.log(this.calendarComponent);
    
    this.subscription = this.eventService.eventsChanged
      .subscribe(
        (events: EventInput[]) => {
          this.events = events;
        }
      );

    this.route.params
      .subscribe(
        (params: Params) => {
          this.year = +params['year'];
          this.month = +params['month'];
          this.day = +params['day'];

          let currentDate = new Date();
          let goToDate = new Date(this.year? this.year : currentDate.getFullYear(), 
                                  this.month? this.month-1 : currentDate.getMonth()-1,
                                  this.day? this.day : currentDate.getDay());
          this.calendarApi.gotoDate(goToDate);
        }
      )
  }
  ngOnInit() {
    console.log("EventListComponent.ngOnInit");
    this.events = this.eventService.getEvents();
  }

  onNewEvent() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onViewItem(id: string) {
    this.eventService.startedViewing
      .next(id);
  }

  handleEventClick(model: {el: Object, event: EventApi, jsEvent: MouseEvent, view: DayGridView}) {
    console.log(model);
    this.onViewItem(model.event.id);

    console.log("this.calendarComponent");
    console.log(this.calendarComponent.defaultDate);
  }  

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
