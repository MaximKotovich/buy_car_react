
interface IState {
    openBurger: boolean
}

const initialState: IState = {
    openBurger: false
}

export const SET_OPEN_BURGER_MENU = 'SET_OPEN_BURGER_MENU'

export const burgerMenuReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_OPEN_BURGER_MENU: {
            return {
                ...state,
                openBurger: action.payload
            }
        }

        default: return state
    }
}
