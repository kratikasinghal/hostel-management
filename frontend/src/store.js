import thunk from "redux-thunk"
import { configureStore } from '@reduxjs/toolkit'
import { userRegisterReducer, userLoginReducer, updateUserProfileReducer, userDetailsReducer,updateUserRoleReducer } from "./reducers/userReducers"
import { getAllAnnouncementsReducer } from "./reducers/AnnouncementReducers"
import { getRolesReducer } from "./reducers/userRoleReducer"
import { getAllServicesReducer } from "./reducers/servicesReducers"
import { createComplaintReducer, getComplaintsReducer, deleteComplaintReducer, getComplaintsWorkerReducer, updateComplaintSolvedReducer } from "./reducers/complaintReducers"
import { createRecordReducer,getRecordsReducer,updateWorkerStatusReducer } from "./reducers/workerFormReducer"

const reducer = {
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    updateUserProfile: updateUserProfileReducer,
    userDetails: userDetailsReducer,
    getAllAnnouncements: getAllAnnouncementsReducer,
    getRoles: getRolesReducer,
    getAllServices: getAllServicesReducer,
    createComplaint: createComplaintReducer,
    getComplaints: getComplaintsReducer,
    deleteComplaint: deleteComplaintReducer,
    createRecord: createRecordReducer,
    getComplaintsWorker: getComplaintsWorkerReducer,
    updateComplaintSolved: updateComplaintSolvedReducer,
    getRecords: getRecordsReducer,
    updateWorkerStatus: updateWorkerStatusReducer,
    updateUserRole: updateUserRoleReducer
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