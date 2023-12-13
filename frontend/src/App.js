import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Chatpages from './Pages/Chatpages';
import { ChakraProvider } from '@chakra-ui/react';
import ChatProvider from './Context/ChatProvider';

function App() {
  return (
    <ChakraProvider>
    <Router>
      {/* <ChatProvider> */}

    <div className="App">
      <Route path = "/" component = {Homepage} exact/>
      <Route path = "/chats" component = {Chatpages} />
    </div>
      {/* </ChatProvider> */}
    </Router>
    </ChakraProvider>
  );
}

export default App;
