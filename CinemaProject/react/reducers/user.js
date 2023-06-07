import {
    SET_USER
} from '../actions/user.js'


export default function user(state, action) {
    state = state || {
        userDetails: {
            firstName: '',
            lastName: '',
            birthDay: '',
            email: '',
            phoneNumber: '',
            password: ''
        }
    };

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                userDetails: action.payload
            };
        default:
            return state;
    }
}
