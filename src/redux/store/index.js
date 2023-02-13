import { configureStore,combineReducers } from '@reduxjs/toolkit'
import favReducer from '../reducers/favReducer'
 import jobReducer from '../reducers/jobReducer'
import userReducer from '../reducers/userReducer'
import companyReducer from '../reducers/companyReducer'

const store = configureStore({
  reducer:combineReducers({
    favourite:favReducer,
    job:jobReducer,
    user:userReducer,
    company:companyReducer
})
})

export default store
