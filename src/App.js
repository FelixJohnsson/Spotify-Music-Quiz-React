import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Pages/Login.js'
import Logged_in from './Pages/Logged_in.js'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/logged_in/" component={Logged_in} />
    </BrowserRouter>

  );
}

export default App;