import { Pipe, PipeTransform } from '@angular/core';
import { EventModel } from '../models/eventModel';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(events: EventModel[], searchTerm: string): EventModel[] {
    if (!searchTerm) {
      return events;
    }
    searchTerm = searchTerm.toLowerCase();
    return events.filter(event =>
      event.title.toLowerCase().includes(searchTerm) ||
      event.description.toLowerCase().includes(searchTerm)
    );
  }

}
