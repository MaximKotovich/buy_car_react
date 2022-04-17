import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {AvatarImage} from "../avatar-image.component/avatar-image.component";
import {OPEN_CLOSE_LOGIN_PAGE} from "../../../pages/login/store/login.action";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/reducers";
import './nav-bar.component.scss'

export const NavBarComponent = () => {
    const user = useSelector((state: RootState) => state.userReducer.user)

    const dispatch = useDispatch()
    return (
        <>
            <Link to="/home">
                <p className='text-on-header'>HOME</p>
            </Link>
            <Link to="/search">
                <p className='text-on-header'>SEARCH</p>
            </Link>
            <Link to="/tags">
                <p className='text-on-header'>TAGS</p>
            </Link>
            <Link to="/tasksBoard">
                <p className='text-on-header'>TASKS</p>
            </Link>
            {user
                ? <div className='avatar'><AvatarImage user={user}/></div>
                : <p className='sign-in-button'
                          onClick={() => dispatch({type: OPEN_CLOSE_LOGIN_PAGE, payload: true})}>
                    SIGN IN
                </p>
            }
        </>
    )
}
