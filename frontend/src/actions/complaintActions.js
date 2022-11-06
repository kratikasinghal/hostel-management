import axios from 'axios'
import { CREATE_COMPLAINT_REQUEST, CREATE_COMPLAINT_SUCCESS, CREATE_COMPLAINT_FAIL, GET_COMPLAINTS_REQUEST, GET_COMPLAINTS_SUCCESS, GET_COMPLAINTS_FAIL, DELETE_COMPLAINT_FAIL, DELETE_COMPLAINT_REQUEST, DELETE_COMPLAINT_SUCCESS } from '../constants/complaintConstants'

const createComplaint = (type, descriptionCustom, descriptionStandard, issueType) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_COMPLAINT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('/api/complaints/create', { complaintType: type, descriptionStandard, descriptionCustom, issueType }, config)

        dispatch({
            type: CREATE_COMPLAINT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_COMPLAINT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

const getComplaints = (filters, department) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_COMPLAINTS_REQUEST
        })
        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        let Data
        if (filters.length === 0 && department.length === 0)
            Data = await axios.get('/api/complaints/resident/get', config)
        else if (filters.length === 0 && department.length !== 0)
            Data = await axios.get(`/api/complaints/resident/get?issueType=${department.join('&issueType=')}`, config)
        else if (filters.length !== 0 && department.length === 0)
            Data = await axios.get(`/api/complaints/resident/get?status=${filters.join('&status=')}`, config)
        else
            Data = await axios.get(`/api/complaints/resident/get?status=${filters.join('&status=')}&issueType=${department.join('&issueType=')}`, config)

        const { data } = Data
        dispatch({
            type: GET_COMPLAINTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_COMPLAINTS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

const deleteComplaint = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_COMPLAINT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.patch(`/api/complaints/delete/${id}`,{},config)

        dispatch({
            type: DELETE_COMPLAINT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_COMPLAINT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export { createComplaint, getComplaints, deleteComplaint }