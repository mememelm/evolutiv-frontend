import { Observable, of } from 'rxjs';
import { ControllerService } from './../../services/controller.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { GetAllUsersActionError, GetAllUsersActionSuccess, UserActionsTypes } from './user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class UsersEffects {

    constructor(private ctrl: ControllerService, private effectActions: Actions) { }

    getAllUsersEffect: Observable<Action> = createEffect(() => {
        return this.effectActions.pipe(
            ofType(UserActionsTypes.GET_ALL_USERS),
            mergeMap(() => {
                return this.ctrl.api.users().pipe(
                    map((user) => new GetAllUsersActionSuccess(user)),
                    catchError((error) => of(new GetAllUsersActionError(error.message)))
                )
            })
        )
    })
}