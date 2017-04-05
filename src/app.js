import React, { Component } from 'react';
import LoginForm from './components/loginform';
import { connect } from 'react-redux';
import axios from 'axios';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: {}
        };
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onLogoutButtonClick = this.onLogoutButtonClick.bind(this);
        this.handleChangeCredential = this.handleChangeCredential.bind(this);
    }

    onLoginSubmit() {
        axios
        .post('http://localhost:1337/customer/authcustomer/login', {
            'email': this.state.loginForm.email,
            'password': this.state.loginForm.password
        })
        .then(({ data: body }) => {
            if ( body.status === 'success' ) {
                this.props.login(body.data);
            }
        })
        .catch(error => {
            console.log(error)
        });
    }

    handleChangeCredential(event, key) {
        const loginForm = Object.assign(this.state.loginForm, {
            [key]: event.target.value
        });
        this.setState({
            loginForm
        });
    }

    onLogoutButtonClick() {
        this.props.logout();
    }

    render() {
        return (
            <div>
                {this.props.auth.user && <h1>Hi {this.props.auth.user.name || 'Anonymous'}, Welcome to React Workshop in SavvyCom</h1>}
                {!this.props.auth.user  && <h1>Login to join workshop</h1>}
                <LoginForm
                    onLoginSubmit = {this.onLoginSubmit}
                    onLogoutButtonClick = {this.onLogoutButtonClick}
                    handleChangeCredential = {this.handleChangeCredential}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (data) => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                data
            });
        },
        logout: () => {
            dispatch({
                type: 'LOGOUT'
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);