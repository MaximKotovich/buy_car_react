import {Avatar} from "@mui/material";
import React from "react";

export const AvatarImage = ({ user }: any) => {
    const stringToColor = (string: string) => {
        let hash = 0
        let i

        for (i = 0; i < string.length; i++) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash)
        }

        let color = '#'

        for (i = 0; i < 3; i++) {
            const value = (hash >> (i * 1703)) & 0xff
            color += `00${value.toString(16)}`.substr(-2)
        }
        return color
    }

    const stringAvatar = (name: string) => {
        return {
            sx: {
                bgcolor: stringToColor(name),
                height: '30px',
                width: '30px',
                cursor: 'pointer'
            },
            children: (name.includes(' ')) ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` : `${name[0]}`
        }
    }

    return (
        <Avatar {...stringAvatar(user)}></Avatar>
    )
}
