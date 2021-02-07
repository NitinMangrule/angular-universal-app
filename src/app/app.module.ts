import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LaunchDetailCardComponent } from './launch-detail-card/launch-detail-card.component';
import { LaunchDetailsContainerComponent } from './launch-details-container/launch-details-container.component';
import { LaunchFiltersComponent } from './launch-filters/launch-filters.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LaunchDetailCardComponent,
    LaunchDetailsContainerComponent,
    LaunchFiltersComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
