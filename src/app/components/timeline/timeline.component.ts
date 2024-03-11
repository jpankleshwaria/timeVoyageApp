import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EventModel } from '../../models/eventModel';
import { EventService } from '../../services/event.service';
import { EventDetailsModalComponent } from '../event-details-modal/event-details-modal.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  events: EventModel[] = [];
  timelineZoomWidth: number = 1024;
  filteredEvents: EventModel[] = [];
  searchTerm: string = '';
  timeLineLayout = true;
  constructor(private eventService: EventService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventService.getEvents()
      .subscribe((allEvents: EventModel[]) => {
        this.events = allEvents;
        this.filteredEvents = allEvents;
      });
  }

  openEventDetails(event: any): void {
    const dialogRef = this.dialog.open(EventDetailsModalComponent, {
      width: '600px', 
      data: event 
    });
  }

  toggleDiv() {
    this.timeLineLayout = !this.timeLineLayout;
  }

  zoomIn(): void {
    this.timelineZoomWidth += 150; 
  }

  zoomOut(): void {
    if (this.timelineZoomWidth > 0) {
      this.timelineZoomWidth -= 150; 
    }
  }

  zoomReset(): void {
    this.timelineZoomWidth = 1024;
  }

  filterEvents(category: string): void {
    if (category === 'all') {
      this.searchTerm = '';
      this.filteredEvents = this.events;
    } else {
      this.filteredEvents = this.events.filter(event =>
        event.title.toLowerCase().includes(category.toLowerCase()) ||
        event.description.toLowerCase().includes(category.toLowerCase())
      );
    }
  }

}
