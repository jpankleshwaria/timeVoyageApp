import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventModel } from '../models/eventModel';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventsData: EventModel[] = [
    {
      "id": 1,
      "title": "The Renaissance Begins",
      "date": "14th Century",
      "description": "The Renaissance period marks the revival of art, culture, and learning in Europe, leading to significant advancements in science, art, and philosophy.",
      "image": "renaissance.jpg",
      "video": "https://www.youtube.com/watch?v=1"
    },
    {
      "id": 2,
      "title": "Declaration of Independence",
      "date": "1776",
      "description": "The Declaration of Independence was adopted by the Continental Congress, declaring the 13 American colonies independent from British rule and laying the foundation for the United States.",
      "image": "declaration_of_independence.jpg",
      "video": "https://www.youtube.com/watch?v=1"
    },
    {
      "id": 3,
      "title": "Fall of the Berlin Wall",
      "date": "1989",
      "description": "The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.",
      "image": "berlin_wall.jpg",
      "video": "https://www.youtube.com/watch?v=1"
    }
  ]
  constructor(private http: HttpClient) { }

  getEvents(): Observable<EventModel[]> {
    return of(this.eventsData);
  }
}