import { takeEvery } from 'redux-saga/effects'
import * as types from '../const/ActionTypes'

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MSG, (action) => {
    params.socket.send(JSON.stringify(action))
    action.user = params.username
  })
}

export default handleNewMessage