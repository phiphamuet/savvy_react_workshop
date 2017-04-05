import React from 'react';
import { connect } from 'react-redux';

const LoginForm = ({auth, onLogoutButtonClick, onLoginSubmit,
    handleChangeCredential}) => {
    if (auth.token) {
        return (
            <div>
                <a href="javascript:;">
                    <button onClick={() => {onLogoutButtonClick()}}>Logout</button>
                </a>
            </div>
        )
    }
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" onChange={(e) => handleChangeCredential(e, 'email')}/>
            <br/>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={(e) => handleChangeCredential(e, 'password')}/>
            <br/>
            <button onClick={() => onLoginSubmit()}>Login</button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(LoginForm)

// export default LoginForm;