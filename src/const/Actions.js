import * as types from '../const/ActionTypes'
let nextMsgID = 0
let nextUserId = 0

export const addMsg = (message, user) => ({
    type: types.ADD_MSG,
    message,
    user,
    id: nextMsgID++
})
export const msgRcv = (message, user) => ({
    type: types.MSG_RCV,
    message,
    user,
    id: nextUserId++
})
export const populateList = users => ({
    type: types.USR_LST,
    users
})