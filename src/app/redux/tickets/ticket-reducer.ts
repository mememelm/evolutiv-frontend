import { TicketActionsTypes, TicketsActions } from './ticket-actions';
import { Ticket } from '../../constants/models/ticket.interface';
import { StateEnum } from 'src/app/constants/shared/default-state-reducer';

export interface TicketsState {
    tickets: Ticket[]
    errorMessage: string
    dataState: StateEnum
}

const initState: TicketsState = {
    tickets: [],
    errorMessage: '',
    dataState: StateEnum.INITIAL
}

export function ticketsReducer(state: TicketsState = initState, action: TicketsActions): TicketsState {
    switch (action.type) {
        case TicketActionsTypes.GET_ALL_TICKETS:
            return { ...state, dataState: StateEnum.LOADING }
        case TicketActionsTypes.GET_ALL_TICKETS_SUCCESS:
            return { ...state, dataState: StateEnum.SUCCESS, tickets: action.payload }
        case TicketActionsTypes.GET_ALL_TICKETS_ERROR:
            return { ...state, dataState: StateEnum.ERROR, errorMessage: action.payload }
        default: return { ...state }
    }
}