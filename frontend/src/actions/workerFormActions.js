import axios from 'axios'
import {CREATE_RECORD_REQUEST,CREATE_RECORD_SUCCESS,CREATE_RECORD_FAIL} from '../constants/workerFormConstants'

const createRecord = (profession,experience,referralID) => async(dispatch, getState) => {
    try{
        dispatch({
            type: CREATE_RECORD_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const {data} = await axios.post('/api/workerData/record',{profession,experience,referralID},config)
    dispatch({
        type: CREATE_RECORD_SUCCESS,
        payload: data
    })
    }catch(error) {
        dispatch({
            type: CREATE_RECORD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
          })
    }
}

export {createRecord}