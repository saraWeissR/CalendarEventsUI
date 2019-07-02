import { Component, EventEmitter, Output } from '@angular/core';
//import { FullCalendarComponent } from '@fullcalendar/angular';
//import { EventInput } from '@fullcalendar/core';
import dayGridPlugin, { DayGridView } from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
//import { CalendarEventInput } from '../calendar-event-input.model';
import { EventInput, EventApi } from '@fullcalendar/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  //@Output() calendarEventInputWasSelected = new EventEmitter<CalendarEventInput>();
  @Output() selectedEventInput = new EventEmitter<{
    el: Object, 
    event: EventApi,
    jsEvent: MouseEvent, 
    view: DayGridView}>();
  //@ViewChild('calendars') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    {
      //TODO: add custom prop to calendarEvents.
      updateDate: new Date(),      
      title: 'Event Now', 
      start: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  handleEventClick(model: {el: Object, event: EventApi, jsEvent: MouseEvent, view: DayGridView}) {
    console.log(model);    
    this.selectedEventInput.emit(model);    
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
