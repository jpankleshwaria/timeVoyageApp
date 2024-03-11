import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventModel } from '../../models/eventModel';

@Component({
  selector: 'app-event-details-modal',
  templateUrl: './event-details-modal.component.html',
  styleUrl: './event-details-modal.component.scss'
})
export class EventDetailsModalComponent {
  constructor(public dialogRef: MatDialogRef<EventDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public event: EventModel) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
