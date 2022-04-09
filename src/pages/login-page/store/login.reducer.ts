import { GET_TOKEN } from "./login.action"
import {getToken} from "../utils/token.service";


const initialState = {
    user: getToken()?.login,
    loading: false
}


export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_TOKEN: {
            return {
                ...state,
                user: getToken().login,
            }
        }

        default: return state
    }
}
