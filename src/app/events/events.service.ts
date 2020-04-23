import { Subject } from 'rxjs';
import { Event } from './event.model';
import { EventApi } from '@fullcalendar/core';

export class EventService {
    eventsChanged = new Subject<EventApi[]>();
    startedEditing = new Subject<EventApi>();

    private events: EventApi[] = [
        // new EventApi("MyEvent", new Date())
    ];
    

    getEvents() {
        return this.events.slice();
    }
    getEvent(eventApi: EventApi) {
        return this.events[0];
        //return this.events[eventApi.id];
    }

    addEvent(event: EventApi) {
        this.events.push(event);
        this.eventsChanged.next(this.events.slice());
    }
    updateEvent(index: number, newEventApi: EventApi) {
        this.events[index] = newEventApi;
        this.eventsChanged.next(this.events.slice());
    }
    deleteEvent(index: number) {
        this.events.splice(index, 1);
        this.eventsChanged.next(this.events.slice());
    }
    addIngredients(events: EventApi[]) {
        this.events.push(...events);
        this.eventsChanged.next(this.events.slice());
    }
}