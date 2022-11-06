import { GET_SERVICES_SUCCESS,GET_SERVICES_FAIL,GET_SERVICES_REQUEST } from "../constants/servicesConstants";
import axios from "axios";

const getAllServices = (includeName) => async(dispatch,getState) => {
    try{
        dispatch({
            type: GET_SERVICES_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/services/getAll?includedNames=${includeName.join('&includedNames=')}`, config)

        dispatch({
            type: GET_SERVICES_SUCCESS,
            payload: data
        })
    }catch(error) {
        dispatch({
            type: GET_SERVICES_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export {getAllServices}