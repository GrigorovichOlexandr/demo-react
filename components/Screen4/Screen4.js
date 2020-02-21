import React, {Fragment, Component} from 'react';
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

import Fb from "../../assets/images/facebook.png";
import Go from "../../assets/images/google.png";
import Tw from "../../assets/images/twitter.png";
import In from "../../assets/images/instagram.png";

export default class Screen4 extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.history.push("/screen5");
    };

    render(){
        return (
            <div className="form_screen">
                <div className="form_screen_top">
                    <h1>Login</h1>
                    <span className="form_screen_top_text">Login to existing account or create a new one.</span>
                    <Fragment>
                        <form onSubmit={this.onSubmit.bind(this)} noValidate>
                            <TextField
                                id="outlined-email-input-required"
                                label="Email address"
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                            />
                            <TextField
                                id="outlined-password-input-required"
                                label="Password"
                                type="text"
                                name="password"
                                margin="normal"
                            />

                            <div>
                                <Button className='btn' type="submit" variant="contained">
                                    Sign In
                                </Button>
                            </div>
                            <div className='text_center'>
                                <span className='forgot_pass'>FORGOT PASSWORD?</span>
                            </div>
                        </form>
                    </Fragment>
                </div>
                <div className="form_screen_login">
                    <span className="soc_login font_bold">OR LOGIN WITH</span>
                    <ul className="socList">
                        <li>
                            <img className='first_icon' src={Fb} alt="Facebook"/>
                        </li>
                        <li>
                            <img className='first_icon' src={Go} alt="Google"/>
                        </li>
                        <li>
                            <img className='first_icon' src={Tw} alt="Twitter"/>
                        </li>
                        <li>
                            <img className='first_icon' src={In} alt="Instagram"/>
                        </li>
                    </ul>
                    <Link className='form_screen_register_acc' to='/screen5'>REGISTER AN ACCOUNT</Link>
                </div>
            </div>
        );
    };
}