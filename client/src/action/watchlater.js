import * as api from "../Api";
export const addtowatchlater=(watchlaterdata)=>async(dispatch)=>{
    try {
        const {data}=await api.addtowatchlater(watchlaterdata)
        dispatch({type:"POST_WATCHLATER",data})
        dispatch(getallwatchlater())
    } catch (error) {
        console.log(error)
    }
}

export const  getallwatchlater=()=>async(dispatch)=>{
    try {
        const {data}=await api.getallwatchlater()
        dispatch({type:"FETCH_ALL_WATCHLATER",payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deletewatchlater=(watchalterdata)=>async(dispatch)=>{
    try {
        const {videoid,viewer}=watchalterdata
        await api.deletewatchlater(videoid,viewer)
        dispatch(getallwatchlater())
    } catch (error) {
        console.log(error)
    }
}