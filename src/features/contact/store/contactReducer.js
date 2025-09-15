import {InputValidator} from "@/utils/inputValidator";

export const initialState = {
    isLoading: false,
    formFilled: false,
    validMail: true,
    msgSent: false,
    error: false,
    name: '',
    email: '',
    msg: ''
}

export const ACTIONS = {
    UPDATE_FIELD: 'UPDATE_FIELD',
    FORM_SUBMIT: 'FORM_SUBMIT',
    RESPONSE_RECEIVED: 'RESPONSE_RECEIVED',
    FEEDBACK_GIVEN: 'FEEDBACK_GIVEN',
}

export function contactReducer(state, action) {
    switch (action.action) {
        case ACTIONS.UPDATE_FIELD:
            const s = {
                ...state,
                [action.field]: action.value,
                validMail: action.field === 'email' ? InputValidator.isValidMail(action.value) : state.validMail
            }
            return checkFormValidity(s)
        case ACTIONS.FORM_SUBMIT:
            console.log('FORM_SUBMIT')
            return {...state, isLoading: true}
        case ACTIONS.RESPONSE_RECEIVED:
            console.log('RESPONSE_RECEIVED')
            return {...state, isLoading: false, error: !action.value, msgSent: action.value}
        case ACTIONS.FEEDBACK_GIVEN:
            console.log('FEEDBACK')
            return state.error ? {...state, error: false} : initialState
        default:
            return state
    }
}


const checkFormValidity = (state) => ({
    ...state,
    formFilled: state.name.trim() !== '' && InputValidator.isValidMail(state.email) && state.msg.trim() !== ''
})




