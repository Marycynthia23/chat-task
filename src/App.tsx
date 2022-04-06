import { MultiChatWindow, useMultiChatLogic, MultiChatSocket} from 'react-chat-engine-advanced';
import './App.css';
// traffic to the server
const projectId: string = '16cf40e3-f921-4e1b-aa96-906250442fe2';
const username: string = 'Muna';
const secret: string = 'Muna@194';


function App() {
  // manage state
  const chatProps = useMultiChatLogic(projectId, username, secret)
  return (
    <div>
      {/*Sockets*/}
      <MultiChatSocket {...chatProps}/>
      {/* connecting components to the server*/}
      <MultiChatWindow {...chatProps} style={{ height: '100vh'}}/>
    </div>
  );
}

export default App;
