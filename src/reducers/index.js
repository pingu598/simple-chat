import { combineReducers } from 'redux'

import msg from './msg'
import usr from './usr'

const chat = combineReducers({
    msg,
    usr
})

export default chat 