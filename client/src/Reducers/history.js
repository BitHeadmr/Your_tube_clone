const historyreducer = (state = { data: null }, action) => {
    switch (action.type) {
        case 'POST_HISTORY':
            return { ...state, data: action?.data }
        case "FETCH_ALL_HISTORY":
            return { ...state, data: action?.payload }
        default:
            return state
    }
}

export default historyreducer