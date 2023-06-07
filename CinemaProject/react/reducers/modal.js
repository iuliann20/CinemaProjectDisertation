import {TOGGLE_CONFIRMATION_MODAL } from '../actions/modal';

export default function modal(state, action) {
    state = state || {
        description: '',
        callback: null,
        showConfirmationModal: false
    };

    switch (action.type) {
        case TOGGLE_CONFIRMATION_MODAL:
            return {
                ...state,
                showConfirmationModal: !state.showConfirmationModal,
                callback: action.payload.callback,
                description: action.payload.description
            };
        default:
            return state;
    }

}
