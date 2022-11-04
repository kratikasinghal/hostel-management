import thunk from "redux-thunk"
import { configureStore } from '@reduxjs/toolkit'
import { userRegisterReducer,userLoginReducer,updateUserProfileReducer,userDetailsReducer } from "./reducers/userReducers"
import { getAllAnnouncementsReducer } from "./reducers/AnnouncementReducers"
import { getRolesReducer } from "./reducers/userRoleReducer"
import { getAllServicesReducer } from "./reducers/servicesReducers"
import { createComplaintReducer } from "./reducers/complaintReducers"

const reducer =  {
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    updateUserProfile: updateUserProfileReducer,
    userDetails: userDetailsReducer,
    getAllAnnouncements: getAllAnnouncementsReducer,
    getRoles: getRolesReducer,
    getAllServices: getAllServicesReducer,
    createComplaint: createComplaintReducer
}

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState, 
    middleware: middleware
})

export default store