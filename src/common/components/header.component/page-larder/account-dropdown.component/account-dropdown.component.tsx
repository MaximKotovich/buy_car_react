import {Divider, ListItemIcon, Menu, MenuItem} from "@mui/material";
import {Logout, Settings} from "@mui/icons-material";
import React from "react";
import {AvatarImage} from "../avatar-image.component/avatar-image.component";
import './account-dropdown.scss'

interface PropTypes {
    user: string
}

export const AccountDropdownComponent = ({user}:PropTypes) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e:any) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className='avatar'
                 onClick={handleClick}
                 aria-controls={open ? 'account-menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
            ><AvatarImage user={user}/></div>
            <Menu
                anchorEl={anchorEl}
                className='drop-down-window'
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    Profile
                </MenuItem>
                <Divider  />
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>

    )
}
