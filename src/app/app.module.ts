import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EventFilterPipe } from './utility/event-filter.pipe';
import { TimelineComponent } from './components/timeline/timeline.component';
import { EventDetailsModalComponent } from './components/event-details-modal/event-details-modal.component';
import { EventService } from './services/event.service';
import { EventCardComponent } from './components/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EventFilterPipe,
    TimelineComponent,
    EventDetailsModalComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
