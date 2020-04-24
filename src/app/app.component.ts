import { Component, OnInit } from '@angular/core';
import { EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentPage = 'home';
  selectedEventInput: EventInput;

  ngOnInit(): void {
    console.log("AppComponent.ngOnInit");
  }

  onNavigate(mode: string) {
    console.log("AppComponent.onNavigate");
    this.currentPage = mode;
  }

  // onUpsertEventInput(res : {mode: string, eventApi: EventInput}) {
  //   console.log("AppComponent.onUpsertEventApi");
  //   console.log("onUpsertEventApi:");
  //   console.log(res);
  //   this.currentPage = res.mode;
  //   this.selectedEventApi = res.eventApi;
  // }
}
