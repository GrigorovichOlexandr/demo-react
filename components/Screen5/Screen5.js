import React, {Component, Fragment} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

import img from "../../assets/images/avatar.png";

export default class Screen5 extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.history.push("/screen6");
    };

    render(){
        return (
            <div className="form_screen">
                <div className="form_screen_top">
                    <h1>Login</h1>
                    <span className="form_screen_top_text">Login to existing account or create a new one.</span>
                    <Fragment>
                        <form onSubmit={this.onSubmit.bind(this)} noValidate>
                            <img className='avatar' src={img} alt="Img"/>
                            <div className="form_box">
                                <TextField
                                    id="outlined-name-input"
                                    label="Name"
                                    type="text"
                                    name="name"
                                    margin="normal"
                                />
                            </div>
                            <div className="form_box">
                                <TextField
                                    id="outlined-age-input"
                                    label="Age"
                                    type="number"
                                    name="age"
                                    margin="normal"
                                />
                            </div>
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
                            <div className="form_box">
                                <TextField
                                    id="outlined-email-input-required"
                                    label="Email address"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                />
                            </div>
                            <div className="form_box">
                                <TextField
                                    id="outlined-phone-number-input"
                                    label="Phone number"
                                    type="number"
                                    name="phone-number"
                                    margin="normal"
                                />
                            </div>
                            <div className="form_box">
                                <TextField
                                    id="outlined-password-input-required"
                                    label="Password"
                                    type="text"
                                    name="password"
                                    margin="normal"
                                />
                            </div>
                            <div className="form_box">
                                <TextField
                                    id="outlined-repeat-password-input-required"
                                    label="Repeat password"
                                    type="text"
                                    name="repeat-password"
                                    margin="normal"
                                />
                            </div>

                            <div className="form_box">
                                <Button className='btn' type="submit" variant="contained">
                                    SIGN UP
                                </Button>
                            </div>
                        </form>
                    </Fragment>
                </div>
            </div>
        );
    };
}