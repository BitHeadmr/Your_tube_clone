

const chanelreducer=(states=[],action)=>{
    switch (action.type) {
        case "UPDATE_DATA":
            return states.map(state=>state._id === action.payload._id? action.payload:state)
        case "FETCH_CHANELS":
            return action.payload
        default:
            return states
    }
}
export default chanelreducer