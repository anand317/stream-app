import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import Streams from './screens/Streams';
import CreateStreams from './screens/CreateStreams';
import EditSteams from './screens/EditSteams';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-streams' element={<CreateStreams/>}/>
          <Route path='/streams' element={<Streams/>}/>
          <Route path='/edit/:id' element={<EditSteams/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
