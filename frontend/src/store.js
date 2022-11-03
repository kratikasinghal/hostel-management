import thunk from "redux-thunk"
import { configureStore } from '@reduxjs/toolkit'
import { userRegisterReducer,userLoginReducer } from "./reducers/userReducers"

const reducer =  {
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer
}

// const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {

}

const middleware = [thunk]

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState, 
    middleware: middleware
})

export default store