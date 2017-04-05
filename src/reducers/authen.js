const authInitialState = {}
export const auth = (state = authInitialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            localStorage.setItem('user', JSON.stringify(action.data));
            return action.data;
        case 'LOGOUT':
            localStorage.removeItem('user');
            return {};
        default:
            return state
    }
}