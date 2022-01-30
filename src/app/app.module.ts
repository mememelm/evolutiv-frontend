import { UsersEffects } from './redux/users/user.effects';
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
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { usersReducer } from './redux/users/user.reducers';
import { TicketAddComponent } from './components/pages/tickets/ticket-add/ticket-add.component';

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from "@angular/material/core";

const materialModules = [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    MatOptionModule
]

@NgModule({
    declarations: [AppComponent, TicketListComponent, TicketDetailComponent, TicketAddComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ...materialModules,
        StoreModule.forRoot({ ticketsState: ticketsReducer, usersState: usersReducer }),
        EffectsModule.forRoot([TicketsEffects, UsersEffects]),
        StoreDevtoolsModule.instrument()
    ],
    providers: [BackendService, FormBuilder, MatDialog],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
