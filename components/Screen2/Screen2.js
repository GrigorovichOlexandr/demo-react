import React, {Component} from 'react';
import Icon from "../../assets/images/Combined Shape.png";
import {Link} from "react-router-dom";

class Screen2 extends Component {
    render() {
        return (
            <div className="start_screen">
                <h1>Renty</h1>
                <div className="first_icon">
                    <img className='first_icon' src={Icon} alt=""/>
                </div>
                <span className="start_screen_text">The golden rule of super ants is <br/>location. Please enable location<br/> to get your services.</span>
                <div className="start_screen__btn_wrap">
                    <div className="btn_block">
                        <Link className='btn btn_allow' to='/screen3'>Enable Location Service</Link>
                    </div>
                    <div className="btn_block">
                        <Link className='btn btn_not_allow' to='/screen2'>Do not allow</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Screen2;