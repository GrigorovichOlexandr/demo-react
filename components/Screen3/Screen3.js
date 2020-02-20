import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Screen3 extends Component {
    render() {
        return (
            <div className="start_screen">
                <h1>Renty</h1>
                <span className="start_screen_text text_left">Finding a Roommate or Appartments has never been so easy! You are only few steps away from your perfect</span>
                <div className="start_screen__btn_wrap">
                    <div className="btn_block">
                        <Link className='btn btn_allow' to='/screen4'>I’M A TENANT</Link>
                    </div>
                    <div className="btn_block">
                        <Link className='btn btn_not_allow' to='/screen5'>I’M A PROPERTY OWNER</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Screen3;