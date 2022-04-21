import {Menu, MenuItem} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import './add-post.scss'

export const AddPostDropdown = ({closeBurgerMenu}:any) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e: any) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className='add-task'
                 onClick={handleClick}
                 aria-controls={open ? 'account-menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
            >ADD POST
            </div>
            <Menu
                anchorEl={anchorEl}
                className='drop-down-window'
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem onClick={closeBurgerMenu}>
                    <Link to="/create-finding-post">
                        Finding
                    </Link>
                </MenuItem>
                <MenuItem onClick={closeBurgerMenu}>
                    <Link to="/create-found-post">
                        Found
                    </Link>
                </MenuItem>
            </Menu>
        </>

    )
}
