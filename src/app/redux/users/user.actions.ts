import { Action } from "@ngrx/store";
import { User } from '../../constants/models/user.interface';

export enum UserActionsTypes {
    GET_ALL_USERS = '[Tickets] Get all users',
    GET_ALL_USERS_SUCCESS = '[Tickets] Get all users success',
    GET_ALL_USERS_ERROR = '[Tickets] Get all users error'
}

export class GetAllUsersAction implements Action {
    type: UserActionsTypes = UserActionsTypes.GET_ALL_USERS
    constructor(public payload: any) { }
}

export class GetAllUsersActionSuccess implements Action {
    type: UserActionsTypes = UserActionsTypes.GET_ALL_USERS_SUCCESS
    constructor(public payload: User[]) { }
}

export class GetAllUsersActionError implements Action {
    type: UserActionsTypes = UserActionsTypes.GET_ALL_USERS_ERROR
    constructor(public payload: string) { }
}

export type UsersActions = GetAllUsersAction | GetAllUsersActionSuccess | GetAllUsersActionError
