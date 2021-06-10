import Input from './Input'
import { useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'

//Chat log
const ChatBox = () => {  
    //TODO: Make presentationl component if needed
    const messages = useSelector(state => state.msg)
    return (
    <>
    <div class="chatbox">
        <nav className="chatboxBox">
            <h4>Chat: </h4>
            <ListGroup variant="flush">         
                {messages.map((msg, index) => 
                <ListGroup.Item className="chatboxStyle"variant="primary" key={index}>{msg.user}: {msg.message}</ListGroup.Item>
                )}
            </ListGroup>
        </nav>
        <Input/>
    </div>
    </>
    )    
}
export default ChatBox