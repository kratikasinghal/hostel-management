import {CREATE_RECORD_REQUEST,CREATE_RECORD_SUCCESS,CREATE_RECORD_FAIL} from '../constants/workerFormConstants'

export const createRecordReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_RECORD_REQUEST:
            return {loading: true}
        case CREATE_RECORD_SUCCESS:
            return {loading: false, success: true}
        case CREATE_RECORD_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}