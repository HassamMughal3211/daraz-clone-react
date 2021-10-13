import './App.css';
import 'antd/dist/antd.css';
import Headers from './compnents/Header/Headers';
import Home from './pages/Home/Home.jsx';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers/>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}  />
      <Route path="/profile" component={Profile}  />
      
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
