const watchlaterreducer=(state={data:null},action)=>{
    switch (action.type) {
        case "POST_WATCHLATER":
            return{...state,data:action?.data}
        case "FETCH_ALL_WATCHLATER":
            return{...state,data:action?.payload}
        default:
            return state
    }
}
export default watchlaterreducer