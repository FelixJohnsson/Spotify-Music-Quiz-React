import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Pages/Login.js'
import Logged_in from './Pages/Logged_in.js'


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/logged_in/" component={Logged_in} exact/>
    </BrowserRouter>

  );
}

export default App;