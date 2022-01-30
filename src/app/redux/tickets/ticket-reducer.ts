import { TicketActionsTypes, TicketsActions } from './ticket-actions';
import { Ticket } from './../../../interfaces/ticket.interface';

export enum TicketsStateEnum {
    LOADING = 'Loading',
    SUCCESS = 'Success',
    ERROR = 'Error',
    INITIAL = 'Initial'
}

export interface TicketsState {
    tickets: Ticket[]
    errorMessage: string
    dataState: TicketsStateEnum
}

const initState: TicketsState = {
    tickets: [],
    errorMessage: '',
    dataState: TicketsStateEnum.INITIAL
}

export function ticketsReducer(state: TicketsState = initState, action: TicketsActions): TicketsState {
    switch (action.type) {
        case TicketActionsTypes.GET_ALL_TICKETS:
            return { ...state, dataState: TicketsStateEnum.LOADING }
        case TicketActionsTypes.GET_ALL_TICKETS_SUCCESS:
            return { ...state, dataState: TicketsStateEnum.SUCCESS, tickets: action.payload }
        case TicketActionsTypes.GET_ALL_TICKETS_ERROR:
            return { ...state, dataState: TicketsStateEnum.ERROR, errorMessage: action.payload }
        default: return { ...state }
    }
}