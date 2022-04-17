import { combineReducers } from 'redux'
import {userReducer} from "../pages/login/store/login.reducer";
import {homeReducer} from "../pages/home/store/home.reducer";
import {burgerMenuReducer} from "../common/components/header.component/store/burger-menu.reducer";


export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    userReducer,
    homeReducer,
    burgerMenuReducer
})

export default rootReducer
