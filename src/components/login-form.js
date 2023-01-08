import React from 'react';
import LoginButton from './login-button';

export default class LoginForm extends React.Component {
    render() {
        return(
            <div className="card w-25">
                <div className="card-header text-white text-center">
                    <h3>Log In</h3>
                </div>
                <div className="card-body">
                    <div class="form-group">                    
                        <label for="email-address">Email address</label>
                        <input type="text" class="form-control" id="email-address"></input>
                        <label for="password">Password</label>
                        <input type="text" class="form-control" id="password"></input>
                        <LoginButton />
                    </div>
                </div>
                <div className="card-footer text-center">
                    <a href="#">For new accounts, create one here.</a>
                </div>
            </div>
        );
        }
    }