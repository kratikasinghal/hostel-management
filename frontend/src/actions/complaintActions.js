import axios from 'axios'
import {CREATE_COMPLAINT_REQUEST, CREATE_COMPLAINT_SUCCESS, CREATE_COMPLAINT_FAIL} from '../constants/complaintConstants'

const createComplaint = (type,descriptionCustom,descriptionStandard) => async(dispatch,getState) => {
    try{
        dispatch({
            type: CREATE_COMPLAINT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post('/api/complaints/create',{complaintType: type, descriptionStandard, descriptionCustom}, config)

        dispatch({
            type: CREATE_COMPLAINT_SUCCESS,
            payload: data
        })
    }catch(error) {
        dispatch({
            type:CREATE_COMPLAINT_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export {createComplaint}