import { GET_ALL_ANNOUNCEMENT_FAIL,GET_ALL_ANNOUNCEMENT_SUCCESS,GET_ALL_ANNOUNCEMENT_REQUEST } from "../constants/announcementConstants";

export const getAllAnnouncementsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_ANNOUNCEMENT_REQUEST:
            return { loading: true }
        case GET_ALL_ANNOUNCEMENT_SUCCESS:
            return { loading: false, announcements: action.payload }
        case GET_ALL_ANNOUNCEMENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}