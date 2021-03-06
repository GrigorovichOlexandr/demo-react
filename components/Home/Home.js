import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Icon from '../../assets/images/ico-push-icon.png';

class Home extends Component {
    render() {
        return (
            <div className="start_screen">
                <h1>Renty</h1>
                <div className="first_icon">
                    <img className='first_icon' src={Icon} alt=""/>
                </div>
                <span className="start_screen_text">Get notifications for new offers,<br/> and and updates of your services.</span>
                <div className="start_screen__btn_wrap">
                    <div className="btn_block">
                        <Link className='btn btn_allow' to='/screen2'>Enable Push Notification</Link>
                    </div>
                    <div className="btn_block">
                        <Link className='btn btn_not_allow' to='/'>Do not allow</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
