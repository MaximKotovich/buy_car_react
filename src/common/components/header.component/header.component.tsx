import React from "react";
import "./header.component.scss"

import PetsIcon from '@mui/icons-material/Pets';
import {NavBarComponent} from "../nav-bar.component/nav-bar.component";
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch, useSelector} from "react-redux";
import {SET_OPEN_BURGER_MENU} from "./store/burger-menu.reducer";
import {RootState} from "../../../store/reducers";
import {useNavigate} from "react-router-dom";


export const HeaderComponent = () => {
    const openBurger = useSelector((state: RootState) => state.burgerMenuReducer.openBurger)

    const dispatch = useDispatch()
    const history = useNavigate();

    const liknToHome = () => {
        history('/home')
    }

    return (
        <header className='header'>
            <div className='container'>
                <div className='header-content'>
                    <div className='logo'>
                        <p onClick={liknToHome}>HAPPY PET</p><PetsIcon></PetsIcon>
                    </div>
                    <div className='dekstop-menu'>
                        <NavBarComponent/>
                    </div>
                    <div className='mobile-menu'>
                        <MenuIcon onClick={() => dispatch({type: SET_OPEN_BURGER_MENU, payload: !openBurger})}/>
                    </div>
                </div>
            </div>
        </header>
    )
}
