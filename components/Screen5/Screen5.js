import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

import img from "../../assets/images/avatar.png";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function Screen5 (){
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault();
        history.push("/login")
    };

    const classes = useStyles();

    return (
        <div className="form_screen">
            <div className="form_screen_top">
                <h1>Basic details ℹ️</h1>

                <Fragment>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <img className='avatar' src={img} alt="Img"/>
                        <TextField
                            id="outlined-name-input"
                            label="Name"
                            type="text"
                            name="name"
                            margin="normal"
                        />
                        <TextField
                            id="outlined-age-input"
                            label="Age"
                            type="number"
                            name="age"
                            margin="normal"
                        />
                        <div className="form_box_2">
                            <TextField
                                id="outlined-from-input"
                                label="Budget from"
                                type="number"
                                name="from"
                                margin="normal"
                            />
                        </div>
                        <div className="form_box_2">
                            <TextField
                                id="outlined-to-input"
                                label="Budget to"
                                type="number"
                                name="to"
                                margin="normal"
                            />
                        </div>
                        <TextField
                            id="outlined-email-input-required"
                            label="Email address"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                        />
                        <TextField
                            id="outlined-phone-number-input"
                            label="Phone number"
                            type="number"
                            name="phone-number"
                            margin="normal"
                        />
                        <TextField
                            id="outlined-password-input-required"
                            label="Password"
                            type="text"
                            name="password"
                            margin="normal"
                        />
                        <TextField
                            id="outlined-repeat-password-input-required"
                            label="Repeat password"
                            type="text"
                            name="repeat-password"
                            margin="normal"
                        />

                        <div>
                            <Button className='btn' type="submit" variant="contained">
                                SIGN UP
                            </Button>
                        </div>
                    </form>
                </Fragment>
            </div>
        </div>
    );
}