import React, { Component } from 'react';
import LoginForm from './components/loginform';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    render() {
        return (
            <div>
                <h1>Welcome to {this.state.user.name} React Workshop in SavvyCom</h1>
                <LoginForm/>
            </div>
        )
    }
}

export default App;