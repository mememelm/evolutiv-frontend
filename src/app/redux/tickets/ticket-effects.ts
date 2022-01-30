import { ControllerService } from './../../services/controller.service';
import { Injectable } from '@angular/core';
import { TicketActionsTypes, GetAllTicketsActionSuccess, GetAllTicketsActionError } from './ticket-actions';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class TicketsEffects {

    constructor(private ctrl: ControllerService, private effectActions: Actions) { }

    getAllTicketsEffect: Observable<Action> = createEffect(() => {
        return this.effectActions.pipe(
            ofType(TicketActionsTypes.GET_ALL_TICKETS),
            mergeMap(() => {
                return this.ctrl.api.tickets().pipe(
                    map((ticket) => new GetAllTicketsActionSuccess(ticket)),
                    catchError((error) => of(new GetAllTicketsActionError(error.message)))
                )
            })
        )
    })

    // postTicketEffect: Observable<Action> = createEffect(() => {
    //     return this.effectActions.pipe(
    //         ofType(TicketActionsTypes.POST_TICKETS),
    //         mergeMap((action) => {
    //             return this.ctrl.api.newTicket(action).pipe(
    //                 map((ticket) => new PostTicketsActionSuccess(ticket)),
    //                 catchError((error) => of(new GetAllTicketsActionError(error.message)))
    //             )
    //         })
    //     )
    // })
}