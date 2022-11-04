import { GET_SERVICES_SUCCESS,GET_SERVICES_FAIL,GET_SERVICES_REQUEST } from "../constants/servicesConstants";

export const getAllServicesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SERVICES_REQUEST:
            return { loading: true }
        case GET_SERVICES_SUCCESS:
            return { loading: false, services: action.payload }
        case GET_SERVICES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
