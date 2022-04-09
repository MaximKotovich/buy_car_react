import { combineReducers } from 'redux'
import {userReducer} from "../pages/login-page/store/login.reducer";


export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    userReducer
})

export default rootReducer
