import * as api from "../Api";

export const editcomment=(commentdata)=>async(dispatch)=>{
    try {
        const {id,commentbody}=commentdata
        const {data}=await api.editcomment(id,commentbody)
        dispatch({type:"EDIT_COMMENT",payload:data})
        dispatch(getallcomment())
    } catch (error) {
        console.log(error)
    }
}

export const postcomment=(commentdata)=>async(dispatch)=>{
    try {
        const {data}=await api.postcomment(commentdata)
        dispatch({type:"POST_COMMENT",payload:data})
        dispatch(getallcomment())
    } catch (error) {
        console.log(error)
    }
}
export const getallcomment=()=>async(dispatch)=>{
    try {
        const {data}=await api.getallcomment()
        // console.log(data)
        dispatch({type:"FETCH_ALL_COMMENTS",payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deletecomment=(id)=>async(dispatch)=>{
    try {
        await api.deletecomment(id)
        dispatch(getallcomment())
    } catch (error) {
        console.log(error)
    }
}