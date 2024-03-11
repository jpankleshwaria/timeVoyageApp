import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventModel } from '../../models/eventModel';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  @Input()
  event!: EventModel;
  @Output() eventClicked = new EventEmitter<number>(); 

  onClick() {
    this.eventClicked.emit(this.event.id);
  }

}
