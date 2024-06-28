import * as api from "../Api";
export const addtolikedvideo=(likedvideodata)=>async(dispatch)=>{
    try {
        const {data}=await api.addtolikevideo(likedvideodata)
        dispatch({type:"POST_LIKEDVIDEO",data})
        dispatch(getalllikedvideo())
    } catch (error) {
        console.log(error)
    }
}

export const  getalllikedvideo=()=>async(dispatch)=>{
    try {
        const {data}=await api.getalllikedvideo()
        dispatch({type:"FETCH_ALL_LIKED_VIDEOS",payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deletelikedvideo=(likedvidedata)=>async(dispatch)=>{
    try {
        const {videoid,viewer}=likedvidedata
        await api.deletelikedvideo(videoid,viewer)
        dispatch(getalllikedvideo())
    } catch (error) {
        console.log(error)
    }
}