import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventModel } from '../../models/eventModel';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-event-details-modal',
  templateUrl: './event-details-modal.component.html',
  styleUrl: './event-details-modal.component.scss'
})
export class EventDetailsModalComponent {
  videoUrl: SafeResourceUrl;

  constructor(public dialogRef: MatDialogRef<EventDetailsModalComponent>,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public event: EventModel) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.event.video);
     }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
