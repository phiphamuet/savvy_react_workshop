import React from 'react';

const LoginForm = ({user, onLogoutButtonClick, onLoginSubmit,
    handleChangeCredential}) => {
    if (user.token) {
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

export default LoginForm;