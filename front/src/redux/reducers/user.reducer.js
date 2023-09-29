const initialState = {
    token: null,
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    id: '',
    isLogged: false,
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, ...action.payload, isLogged: true}
        case 'LOGOUT':
            return initialState
        default:
            return state
    }
}

export default userReducer;
