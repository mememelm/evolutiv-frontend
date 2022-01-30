import { TicketActionsTypes, GetAllTicketsActionSuccess, GetAllTicketsActionError } from './ticket-actions';
import { Observable, of } from 'rxjs';
import { BackendService } from './../../services/backend.service';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class TicketsEffects {

    constructor(private backendService: BackendService, private effectActions: Actions) { }

    getAllTicketsEffect: Observable<Action> = createEffect(() => {
        return this.effectActions.pipe(
            ofType(TicketActionsTypes.GET_ALL_TICKETS),
            mergeMap((action) => {
                return this.backendService.tickets().pipe(
                    map((ticket) => new GetAllTicketsActionSuccess(ticket)),
                    catchError((error) => of(new GetAllTicketsActionError(error.message)))
                )
            })
        )
    })
}