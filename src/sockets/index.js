import * as types from '../const/ActionTypes'
import {msgRcv, populateList} from '../const/Actions'

const setupSocket = (dispatch, user) => {
    // Create WebSocket connection.
    const socket = new WebSocket('ws://localhost:8989');

    // Connection opened
    socket.onopen = () => {
        console.log("Connection opened")
        socket.send(JSON.stringify({
            type: types.ADD_USR,
            user: user
        }));
    }

    // Listen for messages
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        switch (data.type) {
            case types.ADD_MSG:
                dispatch(msgRcv(data.message ,data.user))
                break
            case types.USR_LST:
                dispatch(populateList(data.users))
                break
            default:
                break
        }
    }
    return socket
}
export default setupSocket