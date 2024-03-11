import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EventDetailsModalComponent } from './event-details-modal.component';

describe('EventDetailsModalComponent', () => {
  let component: EventDetailsModalComponent;
  let fixture: ComponentFixture<EventDetailsModalComponent>;
  let matDialogRefSpy: jasmine.SpyObj<MatDialogRef<EventDetailsModalComponent>>;
  let event = {
    "id": 1,
    "title": "The Renaissance Begins",
    "date": "01/01/1301",
    "description": "The Renaissance period marks the revival of art, culture, and learning in Europe, leading to significant advancements in science, art, and philosophy.",
    "image": "renaissance.jpg",
    "video": "https://www.youtube.com/watch?v=1"
  };

  beforeEach(async () => {
    matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    
    await TestBed.configureTestingModule({
      declarations: [EventDetailsModalComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventDetailsModalComponent);
    component = fixture.componentInstance;
    component.event = event; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
