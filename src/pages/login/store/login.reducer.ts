import {GET_TOKEN, OPEN_CLOSE_LOGIN_PAGE} from "./login.action"
import {getToken} from "../utils/token.service";


const initialState = {
    user: 'Maxim',
    // getToken()?.login,
    loading: false,
    isOpen: false
}


export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_TOKEN: {
            return {
                ...state,
                user: getToken().login,
            }
        }
        case OPEN_CLOSE_LOGIN_PAGE: {
            return {
                ...state,
                isOpen: action.payload,
            }
        }

        default: return state
    }
}
