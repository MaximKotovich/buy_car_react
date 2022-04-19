import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {AvatarImage} from "../avatar-image.component/avatar-image.component";
import {OPEN_CLOSE_LOGIN_PAGE} from "../../../pages/login/store/login.action";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/reducers";
import './nav-bar.component.scss'
import {SET_OPEN_BURGER_MENU} from "../header.component/store/burger-menu.reducer";

export const NavBarComponent = () => {
    const user = useSelector((state: RootState) => state.userReducer.user)

    const dispatch = useDispatch()

    const closeBurgerMenu = () => {
        dispatch({type: SET_OPEN_BURGER_MENU, payload: false})
    }

    return (
        <>
            <Link to="/home" onClick={closeBurgerMenu}>
                <p className='text-on-header'>HOME</p>
            </Link>
            <Link to="/search" onClick={closeBurgerMenu}>
                <p className='text-on-header' onClick={closeBurgerMenu}>SEARCH</p>
            </Link>
            <Link to="/tags">
                <p className='text-on-header' onClick={closeBurgerMenu}>TAGS</p>
            </Link>
            <Link to="/tasksBoard">
                <p className='text-on-header' onClick={closeBurgerMenu}>TASKS</p>
            </Link>
            {user
                ? <div className='avatar'><AvatarImage user={user}/></div>
                : <div className='button-block-autorize-registr'>
                    <p className='sign-in-button'
                       onClick={() => dispatch({type: OPEN_CLOSE_LOGIN_PAGE, payload: true})}>
                        SIGN IN
                    </p>
                    <p>/</p>
                    <Link to="/registration" onClick={closeBurgerMenu}>
                        <p className='sign-up-button'>SIGN UP</p>
                    </Link>
                </div>
            }
        </>
    )
}
