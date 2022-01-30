import { Ticket } from './../../../interfaces/ticket.interface';
import { Action } from "@ngrx/store";

export enum TicketActionsTypes {
    GET_ALL_TICKETS = '[Tickets] Get all tickets',
    GET_ALL_TICKETS_SUCCESS = '[Tickets] Get all tickets success',
    GET_ALL_TICKETS_ERROR = '[Tickets] Get all tickets error'
}

export class GetAllTicketsAction implements Action {
    type: TicketActionsTypes = TicketActionsTypes.GET_ALL_TICKETS
    constructor(public payload: any) { }
}

export class GetAllTicketsActionSuccess implements Action {
    type: TicketActionsTypes = TicketActionsTypes.GET_ALL_TICKETS_SUCCESS
    constructor(public payload: Ticket[]) { }
}

export class GetAllTicketsActionError implements Action {
    type: TicketActionsTypes = TicketActionsTypes.GET_ALL_TICKETS_ERROR
    constructor(public payload: string) { }
}

export type TicketsActions = GetAllTicketsAction | GetAllTicketsActionSuccess | GetAllTicketsActionError