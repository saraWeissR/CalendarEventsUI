import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.model';

import { HeaderComponent } from './header/header.component';

import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { EventItemComponent } from './events/events-list/event-item/event-item.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { DropdownDirective } from './shared/dropdown.directive'

@NgModule({
  declarations: [
    DropdownDirective,
    AppComponent,
    HeaderComponent,
    EventsComponent,
    EventsListComponent,
    EventDetailComponent,
    EventEditComponent,
    EventItemComponent,
    EventStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FullCalendarModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }