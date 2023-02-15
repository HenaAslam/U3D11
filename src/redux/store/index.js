import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage' // default value: localStorage
import favReducer from '../reducers/favReducer'
 import jobReducer from '../reducers/jobReducer'
 import userReducer from '../reducers/userReducer'
import companyReducer from '../reducers/companyReducer'
import { encryptTransform } from 'redux-persist-transform-encrypt'



const persistConfig = {
  storage: localStorage,
  key: 'root', 
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENV_SECRET_KEY,
    }),
  ]
}

const combinedReducer = combineReducers({
  favourite:favReducer,
  job:jobReducer,
   user:userReducer,
  company:companyReducer
})


const persistedReducer = persistReducer(persistConfig, combinedReducer)


const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    
    })
  },
})

const persistedStore = persistStore(store)

export {persistedStore, store}
