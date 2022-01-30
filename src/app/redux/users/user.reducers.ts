import { User } from "src/app/constants/models/user.interface";
import { StateEnum } from "src/app/constants/shared/default-state-reducer";
import { UserActionsTypes, UsersActions } from "./user.actions";

export interface UsersState {
    users: User[]
    errorMessage: string
    dataState: StateEnum
}

const initState: UsersState = {
    users: [],
    errorMessage: '',
    dataState: StateEnum.INITIAL
}

export function usersReducer(state: UsersState = initState, action: UsersActions): UsersState {
    switch (action.type) {
        case UserActionsTypes.GET_ALL_USERS:
            return { ...state, dataState: StateEnum.LOADING }
        case UserActionsTypes.GET_ALL_USERS_SUCCESS:
            return { ...state, dataState: StateEnum.SUCCESS, users: action.payload }
        case UserActionsTypes.GET_ALL_USERS_ERROR:
            return { ...state, dataState: StateEnum.ERROR, errorMessage: action.payload }
        default: return { ...state }
    }
}
