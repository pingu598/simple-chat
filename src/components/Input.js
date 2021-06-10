import { useDispatch } from 'react-redux'
import {addMsg} from '../const/Actions'
import {name} from '../utils/name'

const Input = () => {   
    let input
    const dispatch = useDispatch()
  return (    
    <div>
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          dispatch(addMsg(input.value, name))        
          input.value = ''
        }
      }}
        className="inputBox"
        type="text"
        ref={(node) => {
        input = node
      }}
      />
    </div>
  ) 
}
export default Input