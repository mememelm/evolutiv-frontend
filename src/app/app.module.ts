import { RoutingModule } from './routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './services/backend.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketListComponent } from './components/pages/tickets/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './components/pages/tickets/ticket-detail/ticket-detail.component';

@NgModule({
    declarations: [AppComponent, TicketListComponent, TicketDetailComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule
    ],
    providers: [BackendService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
