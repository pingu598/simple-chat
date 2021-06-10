import * as types from '../const/ActionTypes'
const messages = (state = [], action) => {
    switch (action.type) {
        case types.ADD_MSG:
        case types.MSG_RCV:
            return state.concat([
                {
                    message: action.message,
                    user: action.user,
                    id: action.id
                }
            ])
        default: return state
    } 
}
export default messages