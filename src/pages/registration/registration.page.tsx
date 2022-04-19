import React from 'react'
import './registration.page.scss'
import {Button, TextField} from "@mui/material";
import {useForm} from "react-hook-form";

export const RegistrationPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const registration = (data: any) => {
        console.log(data)
    }

    return (

        <form className='registration' onSubmit={handleSubmit(registration)}>
            <div className='registration-content'>
                <TextField
                    variant='outlined'
                    label={errors.name ? 'Enter name' : "Name"}
                    error={errors.name}
                    className='title-at-ticket registration-text-field'
                    InputLabelProps={{shrink: true}}
                    {...register('name', {required: true})}
                />
                <TextField
                    variant='outlined'
                    label="Sur name"
                    className='title-at-ticket registration-text-field'
                    InputLabelProps={{shrink: true}}
                    {...register('surName')}
                />
                <div className='phone-number'>
                    <p>+375</p>
                    <TextField
                        variant='outlined'
                        type='number'
                        label="Phone number"
                        className='mobile-phone registration-text-field'
                        InputLabelProps={{shrink: true}}
                        {...register('phone')}
                    />
                </div>
                <TextField
                    variant='outlined'
                    label={errors.login ? 'Enter login' : "Login"}
                    error={errors.login}
                    className='title-at-ticket registration-text-field'
                    style={{color: "green"}}
                    InputLabelProps={{shrink: true}}
                    {...register('login', {required: true})}
                />
                <TextField
                    variant='outlined'
                    type="password"
                    label="Password"
                    className='title-at-ticket registration-text-field'
                    InputLabelProps={{shrink: true}}
                    {...register('pass', {required: true})}
                />
                <Button variant='contained' color='primary' type='submit'>RegistratiON</Button>
            </div>
        </form>
    )
}
