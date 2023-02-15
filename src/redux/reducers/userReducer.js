import { SET_USER_NAME } from "../actions"

const initialState={
    namee:''
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_USER_NAME:
            return{
                ...state,
                namee:action.payload
                
            }
        default:
            return state
    }

}
export default userReducer