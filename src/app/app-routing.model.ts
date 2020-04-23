import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';

const appRoutes : Routes = [
    { path: '', redirectTo: '/events' , pathMatch: 'full'},
    { path: 'events', component: EventsComponent , children: [
        { path: '', component: EventStartComponent },        
        { path: 'new', component: EventEditComponent },
        { path: ':id', component: EventDetailComponent },
        { path: ':id/edit', component: EventEditComponent }
    ]},
    { path: 'about', redirectTo: 'about', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}