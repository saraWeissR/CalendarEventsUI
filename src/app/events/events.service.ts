import { Subject } from 'rxjs';
import { Event } from './event.model';
import { EventInput } from '@fullcalendar/core';

export class EventService {
    eventsChanged = new Subject<EventInput[]>();
    startedEditing = new Subject<EventInput>();

    private events: EventInput[] = [
        { title: 'Event Now', start: new Date() }
    ];
    
    getEvents() {
        return this.events;
    }
    getEvent(eventInput: EventInput) {
        return this.events[0];
        //return this.events[eventInput.id];
    }

    addEvent(event: EventInput) {
        this.events.push(event);
        this.eventsChanged.next(this.events.slice());
    }
    updateEvent(index: number, newEventInput: EventInput) {
        this.events[index] = newEventInput;
        this.eventsChanged.next(this.events.slice());
    }
    deleteEvent(index: number) {
        this.events.splice(index, 1);
        this.eventsChanged.next(this.events.slice());
    }
    addIngredients(events: EventInput[]) {
        this.events.push(...events);
        this.eventsChanged.next(this.events.slice());
    }
}