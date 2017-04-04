import React, { Component } from 'react';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onLogoutButtonClick = this.onLogoutButtonClick.bind(this);
        this.state = {
        }
    }

    componentDidMount() {
        try {
            const userData = localStorage.getItem('user');
            if (userData) {
                const user = JSON.parse(userData);
                this.setState({ user });
            }
        } catch (e) {
            console.log(e);
        }
    }
    

    onLoginSubmit() {
        var myHeaders = new Headers();
        var payload = JSON.stringify({
            'email': this.email.value,
            'password': this.password.value
        });
        myHeaders.set("Content-Type", "application/json");
        fetch('http://localhost:1337/customer/authcustomer/login', {
            mode: 'cors',
            method: 'POST',
            headers: myHeaders,
            body: payload
        })
        .then(response => {
            return response.json();
        })
        .then(body => {
            this.setState({
                user: body.data
            });
            localStorage.setItem('user', JSON.stringify(body.data));
        })
        .catch(error => {
            console.log(error)
        });
    }

    onLogoutButtonClick() {
        this.setState({
            user: ''
        });
        localStorage.removeItem('user');
    }

    render() {
        if (this.state.user) {
            return (
                <div>
                    <h1>You are logged in</h1>
                    <a href="javascript:;">
                        <button onClick={() => {this.onLogoutButtonClick()}}>Logout</button>
                    </a>
                </div>
            )
        }
        return (
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" ref={email => this.email = email}/>
                <br/>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" ref={password => this.password = password}/>
                <br/>
                <button onClick={() => this.onLoginSubmit()}>Login</button>
            </div>
        );
    }
}

export default LoginForm;