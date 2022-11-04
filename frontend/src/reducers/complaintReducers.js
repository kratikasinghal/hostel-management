import {CREATE_COMPLAINT_REQUEST, CREATE_COMPLAINT_SUCCESS, CREATE_COMPLAINT_FAIL} from '../constants/complaintConstants'

export const createComplaintReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_COMPLAINT_REQUEST:
            return { loading: true }
        case CREATE_COMPLAINT_SUCCESS:
            return { loading: false, complaint: action.payload, success: true }
        case CREATE_COMPLAINT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}