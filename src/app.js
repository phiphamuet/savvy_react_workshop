import React, { Component } from 'react';
import LoginForm from './components/loginform';
class App extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to React Workshop in SavvyCom</h1>
                <LoginForm/>
            </div>
        )
    }
}

export default App;