import React, {useEffect, useState} from "react";
import "./header.component.scss"

import PetsIcon from '@mui/icons-material/Pets';
import {NavBarComponent} from "./page-larder/nav-bar.component/nav-bar.component";
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch, useSelector} from "react-redux";
import {SET_OPEN_BURGER_MENU} from "./store/burger-menu.reducer";
import {RootState} from "../../../store/reducers";
import { useNavigate} from "react-router-dom";
import {useTheme} from "../../custom-hooks/theme.hook";
import {AccountDropdownComponent} from "./page-larder/account-dropdown.component/account-dropdown.component";



export const HeaderComponent = () => {
    const openBurger = useSelector((state: RootState) => state.burgerMenuReducer.openBurger)
    const user = useSelector((state: RootState) => state.userReducer.user)

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
                    <div className='desktop-menu'>
                        <NavBarComponent/>
                    </div>
                    <div className='mobile-menu'>
                        <MenuIcon className='burger-menu-icon'
                                  onClick={() => dispatch({type: SET_OPEN_BURGER_MENU, payload: !openBurger})}/>
                    </div>
                    {user &&
                        <AccountDropdownComponent
                            user='Maxim'
                        />
                    }
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
