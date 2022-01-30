import { RoutingModule } from './routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './services/backend.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TicketListComponent } from './components/pages/tickets/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './components/pages/tickets/ticket-detail/ticket-detail.component';
import { ticketsReducer } from './redux/tickets/ticket-reducer';
import { TicketsEffects } from './redux/tickets/ticket-effects';
import { FormsModule, FormBuilder } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, TicketListComponent, TicketDetailComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
        FormsModule,
        StoreModule.forRoot({ticketsState: ticketsReducer}),
        EffectsModule.forRoot([TicketsEffects]),
        StoreDevtoolsModule.instrument()
    ],
    providers: [BackendService, FormBuilder],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
