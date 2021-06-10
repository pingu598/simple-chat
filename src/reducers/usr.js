import * as types from '../const/ActionTypes'
const users = (state = [], action) => {
    switch (action.type) {
        case types.USR_LST:
            return action.users
        default: return state
    }
}
export default users