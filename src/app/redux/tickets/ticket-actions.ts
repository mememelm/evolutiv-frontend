import { Action } from "@ngrx/store";
import { Ticket } from '../../constants/models/ticket.interface';

export enum TicketActionsTypes {
    GET_ALL_TICKETS = '[Tickets] Get all tickets',
    GET_ALL_TICKETS_SUCCESS = '[Tickets] Get all tickets success',
    GET_ALL_TICKETS_ERROR = '[Tickets] Get all tickets error',
    ADD_TICKET_ACTION_PARENT = '[Tickets] Add ticket action parent',
    ADD_TICKET = '[Tickets] Add ticket',
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

export class AddTicketsActionParent implements Action {
    type: TicketActionsTypes = TicketActionsTypes.ADD_TICKET_ACTION_PARENT
    payload: any
}

export class AddTicket implements Action {
    type = TicketActionsTypes.ADD_TICKET
    constructor(payload: any) {}
}

export type TicketsActions =
    GetAllTicketsAction | GetAllTicketsActionSuccess | GetAllTicketsActionError | AddTicketsActionParent