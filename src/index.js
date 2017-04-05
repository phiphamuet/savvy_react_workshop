import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { auth } from './reducers/authen';

const reducers = combineReducers({
    auth
});
const initStore = {};

try {
    const userCredentials = localStorage.getItem('user');
    const user = JSON.parse(userCredentials);
    if (user) {
        initStore.auth = user;
    }
} catch (e) {
    console.log(e);
}

const store = createStore(reducers, initStore);
store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
);