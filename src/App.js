import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Pages/Login.js';
import Logged_in from './Pages/Logged_in.js';
import Room from './Pages/Room.js';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/logged_in/" component={Logged_in}/>
      <Route path="/room" component={Room} />
    </BrowserRouter>

  );
}

export default App;