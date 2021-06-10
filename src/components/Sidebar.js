import { useSelector } from 'react-redux'
import Badge from 'react-bootstrap/Badge'
const UserList = () => {   
    const users = useSelector(users => users.usr)
    return (
    <div class="userlist">
        <h4 style={{color: 'white'}}>Users: </h4>
        <ul className="userlistCut">
            {users.map((user, index) =>
                <h4>
                <Badge pill variant="primary">
                {user.user}
              </Badge> 
              </h4>           
            )}
        </ul>
    </div> 
    )    
}
export default UserList