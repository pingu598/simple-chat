import './App.css'
import UserList from './components/Sidebar'
import ChatBoxAndChat from './components/ChatBox'

function App() {
  return (
    <div class="grid-container">
    <UserList/>
    <ChatBoxAndChat/> 
    </div>
  );
}

export default App;
