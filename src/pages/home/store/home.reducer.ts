import {SET_ALL_PETS} from "./home.action";


interface IState {
    allPets: []
}

const initialState: IState = {
    allPets: []
}


export const homeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ALL_PETS: {
            return {

            }
        }

        default: return state
    }
}
