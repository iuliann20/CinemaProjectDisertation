import { TOGGLE_CONFIRMATION_MODAL, TOOGLE_LOGIN_MODAL, TOGGLE_EDIT_USER_MODAL, TOOGLE_ADD_OPERATION_MODAL,
    TOOGLE_VIEW_APPOINTMENT_MODAL } from '../actions/modal';

export default function modal(state, action) {
    state = state || {
        description: '',
        callback: null,
        showConfirmationModal: false,
        showLoginModal: false,
        showEditUserModal: false,
        showAddOperationsModal: false,
        showViewAppointmentModal: false
    };

    switch (action.type) {
        case TOGGLE_CONFIRMATION_MODAL:
            return {
                ...state,
                showConfirmationModal: !state.showConfirmationModal,
                callback: action.payload.callback,
                description: action.payload.description
            };
        case TOOGLE_LOGIN_MODAL:
            return {
                ...state,
                showLoginModal: !state.showLoginModal
            }
        case TOGGLE_EDIT_USER_MODAL:
            return {
                ...state,
                showEditUserModal: !state.showEditUserModal
            }
        case TOOGLE_ADD_OPERATION_MODAL:
            return {
                ...state,
                showAddOperationsModal: !state.showAddOperationsModal
            }
        case TOOGLE_VIEW_APPOINTMENT_MODAL:
            return {
                ...state,
                showViewAppointmentModal: !state.showViewAppointmentModal
            }
        default:
            return state;
    }

}
