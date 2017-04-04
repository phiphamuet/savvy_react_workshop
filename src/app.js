import React, { Component } from 'react';
import LoginForm from './components/loginform';
import axios from 'axios';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            loginForm: {}
        };
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onLogoutButtonClick = this.onLogoutButtonClick.bind(this);
        this.handleChangeCredential = this.handleChangeCredential.bind(this);
    }

    componentDidMount() {
        try {
            const userCredentials = localStorage.getItem('user');
            const user = JSON.parse(userCredentials);
            if (user) {
                this.setState({
                    user
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
    

    onLoginSubmit() {
        axios.post('http://localhost:1337/customer/authcustomer/login', {
            'email': this.state.loginForm.email,
            'password': this.state.loginForm.password
        })
        .then(({ data: body }) => {
            this.setState({
                user: body.data
            });
            localStorage.setItem('user', JSON.stringify(body.data));
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
        this.setState({
            user: {}
        });
        localStorage.removeItem('user');
    }


    render() {
        return (
            <div>
                <h1>Hi {this.state.user.user && this.state.user.user.name || 'Anonymous'}, Welcome to React Workshop in SavvyCom</h1>
                <h1>{!this.state.user.user && 'Login to join workshop'}</h1>
                <LoginForm
                    user = {this.state.user}
                    onLoginSubmit = {this.onLoginSubmit}
                    onLogoutButtonClick = {this.onLogoutButtonClick}
                    handleChangeCredential = {this.handleChangeCredential}
                />
            </div>
        )
    }
}

export default App;