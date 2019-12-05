import React,{Component} from 'react';
import { Route,HashRouter, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <HashRouter>
    <Switch>
   
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          {/* <Redirect exact from="/" to="dashboard" /> */}
          {/* <Route component={Notfound} /> */}
      </Switch>
    </HashRouter>
    )
  }
}
export default App
