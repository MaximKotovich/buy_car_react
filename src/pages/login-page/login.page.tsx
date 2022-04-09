import {Box, Button, TextField, Typography} from "@mui/material"
import React, {useState} from "react";
import './login.page.scss';
import {useDispatch} from "react-redux";
import {REQUEST_AUTH} from "./store/login.action";



export const LoginPage = () => {
    const [login, setLogin] = useState('')
    const [pass, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = async (e:any) => {
        e.preventDefault()
            dispatch({ type: REQUEST_AUTH, payload: { login, pass } })
    }

    return (
            <div className='container'>
                <div className="paper">
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Username"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setLogin(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign In
                            </Button>
                        </form>
                </div>
                <Box mt={8}>
                </Box>
            </div>
    )
}
