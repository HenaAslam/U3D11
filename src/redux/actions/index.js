

export const REMOVE_FROM_FAVOURITE="REMOVE_FROM_FAVOURITE"
export const ADD_TO_FAVOURITE="ADD_TO_FAVOURITE"
export const GET_JOBS ="GET_JOBS"
export const SET_USER_NAME="SET_USER_NAME"
export const GET_COMPANY="GET_COMPANY"
export const GET_JOBS_LOADING="GET_JOBS_LOADING"
export const GET_JOBS_ERROR="GET_JOBS_ERROR"

export  const addtofavouritesAction=(company)=>{
    return{
        
            type: ADD_TO_FAVOURITE,
            payload: company,
          
    }
}


export const removefromfavouritesaction=(company)=>{
    return{
        type:REMOVE_FROM_FAVOURITE,
        payload:company
    }

}

export const setusernameaction=(name)=>{
return{
    type:SET_USER_NAME,
    payload:name
}
}



export const getjobsActionAsync = (query) => {
    return async (dispatch, getState) => {
      try {
        dispatch({
          type:GET_JOBS_LOADING,
          payload:true
        })
        const resp = await fetch(
         ` https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`
        )
        if (resp.ok) {
            const { data } = await resp.json()
        
          dispatch({
            type: GET_JOBS,
            payload: data,
          })
          dispatch({
            type:GET_JOBS_LOADING,
            payload:false
          })
        
        } else {
          console.log('error')
          dispatch({
            type:GET_JOBS_LOADING,
            payload:false
          })

          dispatch({
            type:GET_JOBS_ERROR,
            payload:true
          })
        }
      } catch (error) {
        console.log(error)
        dispatch({
          type:GET_JOBS_LOADING,
          payload:false
        })
        dispatch({
          type:GET_JOBS_ERROR,
          payload:true
        })
      }
    }
  }

  export const getCompanyActionAsync = (params) => {
    return async (dispatch, getState) => {
      try {
        const resp = await fetch(
         ` https://strive-benchmark.herokuapp.com/api/jobs?company=${params}`
        )
        if (resp.ok) {
            const { data } = await resp.json()
        
          dispatch({
            type: GET_COMPANY,
            payload: data,
          })
        } else {
          console.log('error')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  
