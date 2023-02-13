import { GET_COMPANY } from "../actions"

const initialState = {
    com:[]
}
const companyReducer=(state=initialState, action)=>
{
    switch(action.type){
    case  GET_COMPANY:
      return {
        ...state,
        com:action.payload
      }

    default:
      return state
  }
}

export default companyReducer