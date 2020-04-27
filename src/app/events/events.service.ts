import { Subject } from 'rxjs';
import { Event } from './event.model';
import { EventInput } from '@fullcalendar/core';

export class EventService {
    eventsChanged = new Subject<EventInput[]>();
    startedViewing = new Subject<string>();
    startedEditing = new Subject<string>();

    private events: EventInput[] = [
        { id: 1, title: 'Event Now', start: new Date() }
    ];
    
    getEvents() {
        return this.events;
    }
    getEvent(id: string) : EventInput {
        var event = this.events.find(x => x.id === id);        
        if (event) {
            return event;
        } else {
            return null;
        }
    }

    viewEvent(id: string) {        
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