import React, {useEffect, useState} from "react";
import "./header.component.scss"

import PetsIcon from '@mui/icons-material/Pets';
import {NavBarComponent} from "../nav-bar.component/nav-bar.component";
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch, useSelector} from "react-redux";
import {SET_OPEN_BURGER_MENU} from "./store/burger-menu.reducer";
import {RootState} from "../../../store/reducers";
import {useNavigate} from "react-router-dom";
import {useTheme} from "../../custom-hooks/theme.hook";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export const HeaderComponent = () => {
    const openBurger = useSelector((state: RootState) => state.burgerMenuReducer.openBurger)

    const dispatch = useDispatch()
    const history = useNavigate();

    const {theme, setTheme} = useTheme()
    const [checked, setChecked] = useState(theme === 'dark')

    const liknToHome = () => {
        history('/home')
    }
    useEffect(() => {
        checked ? setTheme('dark') : setTheme('light')
    }, [checked])


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
                        <MenuIcon className='burger-menu-icon'onClick={() => dispatch({type: SET_OPEN_BURGER_MENU, payload: !openBurger})}/>
                    </div>
                    <label className="checkbox-ios">
                        <input type="checkbox" onChange={(e) => setChecked(!checked)
                        } checked={checked}/>
                        <span className="checkbox-ios-switch"/>
                    </label>
                </div>
            </div>
        </header>
    )
}
