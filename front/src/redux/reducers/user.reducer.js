const initialState = {
    token: null,
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    id: '',
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default userReducer;
