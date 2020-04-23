import { Component, OnInit } from '@angular/core';
import { EventApi } from '@fullcalendar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentPage = 'home';
  selectedEventApi: EventApi;

  ngOnInit(): void {
    console.log("AppComponent.ngOnInit");
  }

  onNavigate(mode: string) {
    console.log("AppComponent.onNavigate");
    this.currentPage = mode;
  }

  onUpsertEventApi(res : {mode: string, eventApi: EventApi}) {
    console.log("AppComponent.onUpsertEventApi");
    console.log("onUpsertEventApi:");
    console.log(res);
    this.currentPage = res.mode;
    this.selectedEventApi = res.eventApi;
  }
}
