import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { AboutComponent } from './about/about.component';

const eventChildren = [
    { path: '', component: EventStartComponent },
    // { path: 'new', component: EventEditComponent },
    // { path: ':id', component: EventDetailComponent },
    // { path: ':id/edit', component: EventEditComponent }
];

const appRoutes : Routes = [
    { path: '', redirectTo: '/events' , pathMatch: 'full'},    
    { path: 'events', component: EventsComponent, children: eventChildren},
    { path: 'events/:year', component: EventsComponent, children: eventChildren},
    { path: 'events/:year/:month', component: EventsComponent, children: eventChildren},
    { path: 'events/:year/:month/:day', component: EventsComponent, children: eventChildren},
    { path: 'about', component: AboutComponent, pathMatch: 'prefix'}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}